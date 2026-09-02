/**
 * Endpoint serverless per Vercel: POST /api/leads
 * Richiede la variabile d'ambiente BREVO_API_KEY nel progetto Vercel.
 */
import { saveLeadToBrevo } from './_brevo';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo non consentito' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const result = await saveLeadToBrevo(body);
    return res.status(result.status).json(result.body);
  } catch (error: any) {
    console.error('[Brevo API Error]:', error);
    return res
      .status(500)
      .json({ error: 'Errore durante la registrazione del contatto', details: error.message });
  }
}
