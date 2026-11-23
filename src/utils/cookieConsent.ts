/**
 * Gestione consenso cookie (6 mesi), Google Consent Mode v2,
 * blocco preventivo script di terze parti (GA4, Google Ads, Meta Pixel)
 * ed eventi pubblicitari conformi (senza dati di contatto, messaggio o interesse).
 */

export interface CookiePreferences {
  version: number;
  technical: true;
  statistics: boolean;
  marketing: boolean;
  updatedAt: string;
  expiresAt: number;
}

const CONSENT_COOKIE_NAME = 'zenith_cookie_consent';
const CONSENT_STORAGE_KEY = 'zenith_cookie_consent_v1';
const CONSENT_VERSION = 1;
const SIX_MONTHS_SECONDS = 180 * 24 * 60 * 60; // 6 mesi (~180 giorni)

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: unknown;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

let gaLoaded = false;
let gadsLoaded = false;
let metaPixelLoaded = false;

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeTechnicalConsentCookie(name: string, value: string, maxAgeSeconds: number): void {
  if (typeof document === 'undefined') return;
  const secureFlag = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSeconds}; Path=/; SameSite=Lax${secureFlag}`;
}

function expireCookie(name: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
  const hostname = window.location.hostname;
  if (hostname && hostname !== 'localhost') {
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${hostname}; SameSite=Lax`;
    const parts = hostname.split('.');
    if (parts.length >= 2) {
      const rootDomain = `.${parts.slice(-2).join('.')}`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${rootDomain}; SameSite=Lax`;
    }
  }
}

function parseStoredPreferences(raw: string | null): CookiePreferences | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    if (
      parsed &&
      parsed.version === CONSENT_VERSION &&
      typeof parsed.statistics === 'boolean' &&
      typeof parsed.marketing === 'boolean' &&
      typeof parsed.expiresAt === 'number' &&
      Date.now() < parsed.expiresAt
    ) {
      return {
        version: CONSENT_VERSION,
        technical: true,
        statistics: parsed.statistics,
        marketing: parsed.marketing,
        updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date().toISOString(),
        expiresAt: parsed.expiresAt,
      };
    }
  } catch {
    return null;
  }
  return null;
}

export function getStoredConsent(): CookiePreferences | null {
  const fromCookie = parseStoredPreferences(readCookie(CONSENT_COOKIE_NAME));
  if (fromCookie) return fromCookie;

  try {
    const fromStorage = parseStoredPreferences(localStorage.getItem(CONSENT_STORAGE_KEY));
    if (fromStorage) return fromStorage;
  } catch {
    // localStorage non disponibile
  }

  return null;
}

function ensureGtagInitialized(): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function loadScriptOnce(id: string, src: string): void {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function loadGoogleAnalyticsIfConfigured(): void {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  if (!gaId) return;

  window[`ga-disable-${gaId}`] = false;
  if (gaLoaded) return;

  ensureGtagInitialized();
  loadScriptOnce('zenith-ga4-script', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`);
  window.gtag?.('js', new Date());
  window.gtag?.('config', gaId, { anonymize_ip: true });
  gaLoaded = true;
}

function loadGoogleAdsIfConfigured(): void {
  const gadsId = import.meta.env.VITE_GOOGLE_ADS_ID?.trim();
  if (!gadsId) return;
  if (gadsLoaded) return;

  ensureGtagInitialized();
  loadScriptOnce('zenith-gads-script', `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gadsId)}`);
  window.gtag?.('js', new Date());
  window.gtag?.('config', gadsId);
  gadsLoaded = true;
}

function loadMetaPixelIfConfigured(): void {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
  if (!pixelId) return;

  if (metaPixelLoaded) {
    window.fbq?.('consent', 'grant');
    return;
  }

  if (typeof window.fbq !== 'function') {
    const n = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue?.push(args);
      }
    } as NonNullable<Window['fbq']>;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    window.fbq = n;
    if (!window._fbq) window._fbq = n;
  }

  loadScriptOnce('zenith-meta-pixel-script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('consent', 'grant');
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');
  metaPixelLoaded = true;
}

function revokeNonTechnicalTrackers(prefs: CookiePreferences): void {
  if (!prefs.statistics) {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
    if (gaId) {
      window[`ga-disable-${gaId}`] = true;
    }
    expireCookie('_ga');
    if (typeof document !== 'undefined') {
      document.cookie.split(';').forEach((cookie) => {
        const cookieName = cookie.split('=')[0]?.trim();
        if (cookieName && cookieName.startsWith('_ga')) {
          expireCookie(cookieName);
        }
      });
    }
  }

  if (!prefs.marketing) {
    if (typeof window.fbq === 'function') {
      window.fbq('consent', 'revoke');
    }
    ['_gcl_au', '_fbp', '_fbc', 'fr'].forEach(expireCookie);
  }
}

export function applyConsentState(prefs: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  ensureGtagInitialized();

  // Aggiorna Google Consent Mode v2 solo dopo la scelta dell'utente
  window.gtag?.('consent', 'update', {
    analytics_storage: prefs.statistics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
    personalization_storage: prefs.marketing ? 'granted' : 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
  });

  // Carica eventuali script di terze parti SOLO dopo il consenso esplicito alla rispettiva categoria
  if (prefs.statistics) {
    loadGoogleAnalyticsIfConfigured();
  }
  if (prefs.marketing) {
    loadGoogleAdsIfConfigured();
    loadMetaPixelIfConfigured();
  }

  revokeNonTechnicalTrackers(prefs);
}

export function saveConsent(choices: {
  statistics: boolean;
  marketing: boolean;
}): CookiePreferences {
  const now = Date.now();
  const preferences: CookiePreferences = {
    version: CONSENT_VERSION,
    technical: true,
    statistics: Boolean(choices.statistics),
    marketing: Boolean(choices.marketing),
    updatedAt: new Date(now).toISOString(),
    expiresAt: now + SIX_MONTHS_SECONDS * 1000,
  };

  const serialized = JSON.stringify(preferences);
  writeTechnicalConsentCookie(CONSENT_COOKIE_NAME, serialized, SIX_MONTHS_SECONDS);
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, serialized);
    // Rimuove eventuale vecchia chiave legacy
    localStorage.removeItem('zenith_cookie_consent');
  } catch {
    // localStorage non disponibile
  }

  applyConsentState(preferences);
  return preferences;
}

/**
 * Evento pubblicitario di invio modulo conforme al GDPR / Privacy Policy (punto 6):
 * - Parte SOLO se l'utente ha prestato consenso esplicito alla categoria Marketing e se i tracker sono configurati/caricati.
 * - NON trasmette MAI il campo "interesse", il messaggio o i dati di contatto (nome, telefono, email).
 */
export function trackLeadSubmissionEvent(): void {
  const prefs = getStoredConsent();
  if (!prefs?.marketing) return;

  const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim();
  if (pixelId && metaPixelLoaded && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }

  const gadsId = import.meta.env.VITE_GOOGLE_ADS_ID?.trim();
  const gadsLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL?.trim();
  if (gadsId && gadsLoaded && typeof window.gtag === 'function') {
    if (gadsLabel) {
      window.gtag('event', 'conversion', {
        send_to: `${gadsId}/${gadsLabel}`,
      });
    } else {
      window.gtag('event', 'generate_lead');
    }
  }
}
