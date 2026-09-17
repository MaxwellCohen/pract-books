import { HTML_CACHE_CONTROL } from '@/lib/catalog-cache';

const PRIVATE_CACHE_CONTROL = 'private, no-store';

export function catalogDocumentHeaders(delayMs: number): HeadersInit {
  const cacheControl = delayMs > 0 ? PRIVATE_CACHE_CONTROL : HTML_CACHE_CONTROL;

  return {
    'Cache-Control': cacheControl,
    'CDN-Cache-Control': cacheControl,
    'Vercel-CDN-Cache-Control': cacheControl,
    'Netlify-CDN-Cache-Control': cacheControl,
  };
}
