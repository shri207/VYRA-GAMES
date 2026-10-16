import express from 'express';
import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Ensure data storage directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const waitlistFile = path.join(dataDir, 'waitlist.json');
const contactsFile = path.join(dataDir, 'contacts.json');

// Helper to safely load JSON
function loadData<T>(filePath: string): T[] {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return [];
}

// Helper to safely save JSON
function saveData<T>(filePath: string, data: T[]) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error(`Error saving ${filePath}:`, err);
  }
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    studio: 'Vyra Games',
    tagline: 'Stories Play Forever',
    timestamp: new Date().toISOString()
  });
});

// Waitlist Pre-registration Endpoint
app.post('/api/waitlist', (req: Request, res: Response) => {
  const { email, platformPreference = 'Android', consentAccepted } = req.body;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (!consentAccepted) {
    return res.status(400).json({ error: 'Please consent to receive playtest and release notifications.' });
  }

  const waitlist = loadData<any>(waitlistFile);
  const existing = waitlist.find((entry) => entry.email === normalizedEmail);

  if (existing) {
    return res.status(200).json({
      success: true,
      alreadyRegistered: true,
      ticketId: existing.ticketId,
      message: 'You are already registered for the CM Vijay – Street Battle playtest waitlist!'
    });
  }

  const ticketId = `VYRA-WL-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const newEntry = {
    ticketId,
    email: normalizedEmail,
    game: 'CM Vijay – Street Battle',
    platformPreference,
    registeredAt: new Date().toISOString()
  };

  waitlist.push(newEntry);
  saveData(waitlistFile, waitlist);

  return res.status(201).json({
    success: true,
    ticketId,
    message: 'Pre-registration confirmed! You will receive notification as soon as the Android closed playtest opens.',
    entry: {
      game: newEntry.game,
      platformPreference: newEntry.platformPreference,
      registeredAt: newEntry.registeredAt
    }
  });
});

// Contact & Support Form Endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, category = 'General', message, consentAccepted } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ error: 'Please enter your name (minimum 2 characters).' });
  }

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(normalizedEmail)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ error: 'Please enter a message of at least 10 characters.' });
  }

  const allowedCategories = ['General', 'Support', 'Publishing & Business', 'Press & Media', 'Community'];
  const sanitizedCategory = allowedCategories.includes(category) ? category : 'General';

  const contacts = loadData<any>(contactsFile);
  const ticketId = `VYRA-TKT-${Date.now().toString().slice(-6)}-${Math.floor(10 + Math.random() * 90)}`;

  const newContact = {
    ticketId,
    name: name.trim(),
    email: normalizedEmail,
    category: sanitizedCategory,
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    status: 'Received'
  };

  contacts.push(newContact);
  saveData(contactsFile, contacts);

  return res.status(201).json({
    success: true,
    ticketId,
    message: 'Inquiry received. The Vyra Games team will review your message and reply via email.',
    category: sanitizedCategory,
    submittedAt: newContact.submittedAt
  });
});

// Serve frontend in Vite dev mode or production static
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Vyra Games server running at http://0.0.0.0:${PORT} [${isProd ? 'production' : 'development'}]`);
  });
}

startServer();
