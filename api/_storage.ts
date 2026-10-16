import path from 'path';
import fs from 'fs';

export interface WaitlistEntry {
  ticketId: string;
  email: string;
  game: string;
  platformPreference: string;
  registeredAt: string;
}

export interface ContactEntry {
  ticketId: string;
  name: string;
  email: string;
  category: string;
  message: string;
  submittedAt: string;
  status: string;
}

// In-memory fallbacks to guarantee 0 crashes on serverless / read-only systems
const inMemoryWaitlist: WaitlistEntry[] = [];
const inMemoryContacts: ContactEntry[] = [];

// Determine safe storage directory (local or /tmp for Vercel Serverless)
function getStorageDir(): string | null {
  // 1. Try local data dir
  try {
    const localDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(localDir)) {
      fs.mkdirSync(localDir, { recursive: true });
    }
    const testFile = path.join(localDir, '.write-test-' + Date.now());
    fs.writeFileSync(testFile, 'test');
    fs.unlinkSync(testFile);
    return localDir;
  } catch {
    // 2. Try /tmp dir (always writable on Vercel / AWS Lambda)
    try {
      const tmpDir = path.join('/tmp', 'vyra-games-data');
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      return tmpDir;
    } catch {
      return null;
    }
  }
}

export function loadWaitlist(): WaitlistEntry[] {
  const dir = getStorageDir();
  if (dir) {
    const file = path.join(dir, 'waitlist.json');
    try {
      if (fs.existsSync(file)) {
        const raw = fs.readFileSync(file, 'utf-8');
        return JSON.parse(raw);
      }
    } catch {
      // Fallback to in-memory
    }
  }
  return [...inMemoryWaitlist];
}

export function saveWaitlist(data: WaitlistEntry[]) {
  // Always update in-memory
  inMemoryWaitlist.length = 0;
  inMemoryWaitlist.push(...data);

  const dir = getStorageDir();
  if (dir) {
    const file = path.join(dir, 'waitlist.json');
    try {
      fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
    } catch {
      // If disk write fails, memory is preserved
    }
  }
}

export function loadContacts(): ContactEntry[] {
  const dir = getStorageDir();
  if (dir) {
    const file = path.join(dir, 'contacts.json');
    try {
      if (fs.existsSync(file)) {
        const raw = fs.readFileSync(file, 'utf-8');
        return JSON.parse(raw);
      }
    } catch {
      // Fallback to in-memory
    }
  }
  return [...inMemoryContacts];
}

export function saveContacts(data: ContactEntry[]) {
  // Always update in-memory
  inMemoryContacts.length = 0;
  inMemoryContacts.push(...data);

  const dir = getStorageDir();
  if (dir) {
    const file = path.join(dir, 'contacts.json');
    try {
      fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
    } catch {
      // If disk write fails, memory is preserved
    }
  }
}
