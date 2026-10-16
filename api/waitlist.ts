import { loadWaitlist, saveWaitlist, WaitlistEntry } from './_storage.ts';

export default function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Parse body safely whether parsed by Vercel or string
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Malformed JSON payload.' });
    }
  }

  const { email, platformPreference = 'Android', consentAccepted } = body || {};

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

  const waitlist = loadWaitlist();
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
  const newEntry: WaitlistEntry = {
    ticketId,
    email: normalizedEmail,
    game: 'CM Vijay – Street Battle',
    platformPreference,
    registeredAt: new Date().toISOString()
  };

  waitlist.push(newEntry);
  saveWaitlist(waitlist);

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
}
