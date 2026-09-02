/**
 * Endpoint serverless per Netlify: POST /api/leads (vedi redirect in netlify.toml)
 * Richiede la variabile d'ambiente BREVO_API_KEY nel sito Netlify.
 */
import { saveLeadToBrevo } from '../../api/_brevo';

export default async function handler(req: Request): Promise<Response> {
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  if (req.method !== 'POST') {
    return json({ error: 'Metodo non consentito' }, 405);
  }

  try {
    const body = await req.json().catch(() => ({}));
    const result = await saveLeadToBrevo(body);
    return json(result.body, result.status);
  } catch (error: any) {
    console.error('[Brevo API Error]:', error);
    return json(
      { error: 'Errore durante la registrazione del contatto', details: error.message },
      500,
    );
  }
}
