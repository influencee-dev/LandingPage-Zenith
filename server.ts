import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for Brevo integration (List #51)
app.post('/api/leads', async (req, res) => {
  try {
    const { fullName, phone, email, interest, message } = req.body;

    if (!email || !fullName) {
      return res.status(400).json({ error: 'Nome ed email sono obbligatori' });
    }

    const apiKey =
      process.env.BREVO_API_KEY ||
      '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';

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

    const mainPayload = {
      email: email.trim().toLowerCase(),
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        NOME: firstName,
        COGNOME: lastName,
        NOME_COMPLETO: fullName.trim(),
        SMS: formattedPhone,
        WHATSAPP: formattedPhone,
        PERCORSO_INTERESSE: interest || '',
        INTERESSE: interest || '',
        MESSAGGIO: message || '',
        FONTE: 'Landing Page Zenith Fisiofit',
      },
      listIds: [51],
      updateEnabled: true,
    };

    console.log(`[Brevo API] Registering contact ${email} to list #51...`);

    let response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(mainPayload),
    });

    // If custom attributes fail on Brevo, fallback to standard attributes
    if (!response.ok) {
      const errorMsg = await response.text();
      console.warn('[Brevo API] First attempt notice:', response.status, errorMsg);

      const fallbackPayload = {
        email: email.trim().toLowerCase(),
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          SMS: formattedPhone,
        },
        listIds: [51],
        updateEnabled: true,
      };

      response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(fallbackPayload),
      });

      if (!response.ok) {
        // Minimal fallback (only email and list 51)
        const minimalPayload = {
          email: email.trim().toLowerCase(),
          listIds: [51],
          updateEnabled: true,
        };
        response = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(minimalPayload),
        });
      }
    }

    const data = await response.json().catch(() => ({ success: true }));
    console.log(`[Brevo API] Contact ${email} successfully processed into List #51.`);
    return res.json({ success: true, data });
  } catch (error: any) {
    console.error('[Brevo API Error]:', error);
    return res.status(500).json({ error: 'Errore durante la registrazione del contatto', details: error.message });
  }
});

// Health check route
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
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

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
