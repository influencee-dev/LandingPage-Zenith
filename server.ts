import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID) || 51;

app.use(express.json());

// API route for Brevo integration (List #51)
app.post('/api/leads', async (req, res) => {
  try {
    const { fullName, phone, email, interest, message } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({ error: 'Nome ed email sono obbligatori' });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('[Brevo API] BREVO_API_KEY non configurata: lead NON salvato.', { email });
      return res.status(500).json({ error: 'Configurazione Brevo mancante sul server' });
    }

    // Parse names
    const nameParts = (fullName || '').trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Standardize phone format
    const rawPhone = (phone || '').replace(/[^\d+]/g, '');
    let formattedPhone = rawPhone;
    if (formattedPhone && !formattedPhone.startsWith('+')) {
      if (formattedPhone.startsWith('39')) {
        formattedPhone = `+${formattedPhone}`;
      } else {
        formattedPhone = `+39${formattedPhone.replace(/^0+/, '')}`;
      }
    }

    // ATTENZIONE: Brevo accetta la richiesta (201) ma SCARTA silenziosamente gli
    // attributi che non esistono nell'account. Qui usiamo solo attributi esistenti.
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
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    };

    console.log(`[Brevo API] Registering contact ${payload.email} to list #${BREVO_LIST_ID}...`);

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
      const errorMsg = await response.text();
      console.error('[Brevo API] Errore', response.status, errorMsg, { email: payload.email });
      return res
        .status(502)
        .json({ error: 'Brevo ha rifiutato il contatto', status: response.status, details: errorMsg });
    }

    const data = await response.json().catch(() => ({}));
    console.log(`[Brevo API] Contact ${payload.email} salvato nella lista #${BREVO_LIST_ID}.`);
    return res.json({ success: true, data });
  } catch (error: any) {
    console.error('[Brevo API Error]:', error);
    return res.status(500).json({ error: 'Errore durante la registrazione del contatto', details: error.message });
  }
});

// Health check route
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', brevoConfigured: Boolean(process.env.BREVO_API_KEY) });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (!process.env.BREVO_API_KEY) {
    console.warn('[AVVISO] BREVO_API_KEY non impostata: i lead NON verranno salvati su Brevo.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
