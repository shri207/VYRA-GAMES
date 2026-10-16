export default function handler(_req: any, res: any) {
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json({
    status: 'ok',
    studio: 'Vyra Games',
    tagline: 'Stories Play Forever',
    environment: process.env.VERCEL ? 'vercel-serverless' : 'node-runtime',
    timestamp: new Date().toISOString()
  });
}
