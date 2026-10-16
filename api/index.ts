import healthHandler from './health.ts';
import waitlistHandler from './waitlist.ts';
import contactHandler from './contact.ts';

export default function handler(req: any, res: any) {
  const url = req.url || '';
  if (url.includes('/health')) {
    return healthHandler(req, res);
  }
  if (url.includes('/waitlist')) {
    return waitlistHandler(req, res);
  }
  if (url.includes('/contact')) {
    return contactHandler(req, res);
  }

  return healthHandler(req, res);
}
