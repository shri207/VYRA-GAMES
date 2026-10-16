import { loadContacts, saveContacts, ContactEntry } from './_storage.ts';

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

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Malformed JSON payload.' });
    }
  }

  const { name, email, category = 'General', message, consentAccepted } = body || {};

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

  const contacts = loadContacts();
  const ticketId = `VYRA-TKT-${Date.now().toString().slice(-6)}-${Math.floor(10 + Math.random() * 90)}`;

  const newContact: ContactEntry = {
    ticketId,
    name: name.trim(),
    email: normalizedEmail,
    category: sanitizedCategory,
    message: message.trim(),
    submittedAt: new Date().toISOString(),
    status: 'Received'
  };

  contacts.push(newContact);
  saveContacts(contacts);

  return res.status(201).json({
    success: true,
    ticketId,
    message: 'Inquiry received. The Vyra Games team will review your message and reply via email.',
    category: sanitizedCategory,
    submittedAt: newContact.submittedAt
  });
}
