/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type InterestOption =
  | 'Palestra Fitness'
  | 'Centro Personal Trainer'
  | 'Palestra Terapeutica'
  | 'Centro Fisioterapia'
  | 'Promo'
  | 'Valutazione / percorso personalizzato'
  | 'Altro';

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  interest: InterestOption;
  message: string;
  privacyAccepted: boolean;
}

/**
 * CONFIGURAZIONE E PLACEHOLDER ZENITH
 * 
 * Modifica i valori sottostanti quando colleghi la landing page ai tuoi canali:
 */
export const ZENITH_CONFIG = {
  // Numero WhatsApp ufficiale Zenith (formato internazionale senza +)
  WHATSAPP_NUMBER: '393292826417',

  // Endpoint API Brevo proxy server-side
  BREVO_ENDPOINT: '/api/leads',
  
  // ID della lista contatti Brevo
  BREVO_LIST_IDS: [51],

  // URL dell'informativa privacy aziendale (es. "/privacy-policy" o "https://zenithfisiofit.it/privacy")
  PRIVACY_POLICY_URL: '#privacy',

  // Dati di contatto Zenith
  ADDRESS: 'Via G. L. Radice, 2, Foggia, Italy 71121',
  PHONE: '+39 329 282 6417',
  PHONE_RAW: '+393292826417',

  // Social Channels Zenith
  INSTAGRAM: 'https://www.instagram.com/centrozenith/',
  FACEBOOK: 'https://www.facebook.com/centrozenithfoggia',
};

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  duration?: string;
  includes?: string[];
  benefit: string;
  merchandise: ('tshirt' | 'towel' | 'backpack')[];
  ctaText: string;
  formInterestValue: InterestOption;
  isPopular?: boolean;
}
