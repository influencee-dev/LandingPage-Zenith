/**
 * Logica condivisa per il salvataggio dei lead su Brevo.
 * Usata da api/leads.ts (Vercel) e netlify/functions/leads.ts (Netlify).
 */

export interface LeadInput {
  fullName?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
}

export interface LeadResult {
  status: number;
  body: Record<string, unknown>;
}

export async function saveLeadToBrevo(input: LeadInput): Promise<LeadResult> {
  const { fullName, phone, email, interest, message } = input;

  if (!email || !fullName) {
    return { status: 400, body: { error: 'Nome ed email sono obbligatori' } };
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('[Brevo API] BREVO_API_KEY non configurata: lead NON salvato.', { email });
    return { status: 500, body: { error: 'Configurazione Brevo mancante sul server' } };
  }

  const listId = Number(process.env.BREVO_LIST_ID) || 51;

  const nameParts = fullName.trim().split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const rawPhone = (phone || '').replace(/[^\d+]/g, '');
  let formattedPhone = rawPhone;
  if (formattedPhone && !formattedPhone.startsWith('+')) {
    formattedPhone = formattedPhone.startsWith('39')
      ? `+${formattedPhone}`
      : `+39${formattedPhone.replace(/^0+/, '')}`;
  }

  // ATTENZIONE: Brevo accetta la richiesta ma SCARTA in silenzio gli attributi
  // che non esistono nell'account. Usare solo attributi realmente presenti.
  const attributes: Record<string, string> = {
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    SERVIZIO_CLIENTE: interest || '',
    MESSAGE_FORM: message || '',
    SOURCE: 'Landing Page Zenith Fisiofit',
  };
  if (formattedPhone) {
    attributes.SMS = formattedPhone;
    attributes.WHATSAPP = formattedPhone;
    attributes.TELEFONO = formattedPhone;
  }

  const payload = {
    email: email.trim().toLowerCase(),
    attributes,
    listIds: [listId],
    updateEnabled: true,
  };

  console.log(`[Brevo API] Registering contact ${payload.email} to list #${listId}...`);

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('[Brevo API] Errore', response.status, details, { email: payload.email });
    return {
      status: 502,
      body: { error: 'Brevo ha rifiutato il contatto', status: response.status, details },
    };
  }

  const data = await response.json().catch(() => ({}));
  console.log(`[Brevo API] Contact ${payload.email} salvato nella lista #${listId}.`);
  return { status: 200, body: { success: true, data } };
}
