/**
 * Endpoint serverless Vercel: POST /api/leads
 *
 * Salva il lead del form come contatto Brevo nella lista indicata da
 * BREVO_LIST_ID (default 51 = "Zenith").
 *
 * Richiede la variabile d'ambiente BREVO_API_KEY nel progetto Vercel.
 *
 * NOTA: nessun import relativo. Il package.json dichiara "type": "module",
 * quindi Node eseguirebbe questo file come ESM, dove gli import relativi
 * senza estensione falliscono in runtime (ERR_MODULE_NOT_FOUND).
 */

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const { fullName, phone, email, interest, message } = body;

    if (!email || !fullName) {
      return res.status(400).json({ error: 'Nome ed email sono obbligatori' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('[Brevo API] BREVO_API_KEY non configurata: lead NON salvato.', { email });
      return res.status(500).json({ error: 'Configurazione Brevo mancante sul server' });
    }

    const listId = Number(process.env.BREVO_LIST_ID) || 51;

    const nameParts = String(fullName).trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const rawPhone = String(phone || '').replace(/[^\d+]/g, '');
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
      email: String(email).trim().toLowerCase(),
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
      return res
        .status(502)
        .json({ error: 'Brevo ha rifiutato il contatto', status: response.status, details });
    }

    const data = await response.json().catch(() => ({}));
    console.log(`[Brevo API] Contact ${payload.email} salvato nella lista #${listId}.`);
    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('[Brevo API Error]:', error);
    return res
      .status(500)
      .json({ error: 'Errore durante la registrazione del contatto', details: error.message });
  }
}
