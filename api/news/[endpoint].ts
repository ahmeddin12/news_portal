import type { VercelRequest, VercelResponse } from '@vercel/node';

// Allow-list the endpoints we proxy to on NewsAPI
const ALLOWED_ENDPOINTS = new Set(['top-headlines', 'everything']);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  const endpoint = (req.query.endpoint as string) || '';
  if (!ALLOWED_ENDPOINTS.has(endpoint)) {
    return res.status(400).json({ status: 'error', message: 'Invalid endpoint' });
  }

  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ status: 'error', message: 'Server misconfiguration: NEWS_API_KEY is not set' });
  }

  // Build the NewsAPI URL preserving supported query params
  const baseUrl = `https://newsapi.org/v2/${endpoint}`;
  const url = new URL(baseUrl);

  // Pass through selected query params
  const passthroughParams = ['country', 'category', 'q', 'page', 'pageSize', 'language', 'sources', 'sortBy', 'from', 'to'];
  for (const key of passthroughParams) {
    const value = req.query[key];
    if (typeof value === 'string') {
      url.searchParams.set(key, value);
    }
  }

  // Defaults similar to existing client behavior
  if (endpoint === 'top-headlines' && !url.searchParams.has('country')) {
    url.searchParams.set('country', 'us');
  }

  // Inject API key server-side
  url.searchParams.set('apiKey', apiKey);

  try {
    const response = await fetch(url.toString());
    const data = await response.json();

    // Mirror the upstream status code when possible
    if (!response.ok) {
      return res.status(response.status).json({ status: 'error', upstreamStatus: response.status, data });
    }

    // Optional: cache for a short time on Vercel Edge/Browser (tune as needed)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=60');
    return res.status(200).json(data);
  } catch (err: unknown) {
    return res.status(502).json({ status: 'error', message: 'Failed to fetch from NewsAPI', details: String(err) });
  }
}
