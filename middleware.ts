// Vercel Edge Middleware — proxies /admin and /api/admin to the Clicka engine
// while preserving the salon's host. Vercel's vercel.json rewrites to external
// URLs drop the original Host (only the destination host reaches the engine),
// so the engine can't tell which salon to render. Middleware lets us forward
// the original host explicitly via x-forwarded-host.

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*'],
};

const ENGINE_ORIGIN = 'https://www.clicka.bg';

export default async function middleware(request: Request): Promise<Response> {
  const incoming = new URL(request.url);
  const target = new URL(incoming.pathname + incoming.search, ENGINE_ORIGIN);

  const headers = new Headers(request.headers);
  headers.set('x-forwarded-host', incoming.host);
  headers.set('x-forwarded-proto', incoming.protocol.replace(':', ''));
  // Drop Host so fetch sets it to the target (www.clicka.bg). Otherwise the
  // engine project would reject the request as misrouted.
  headers.delete('host');

  const method = request.method.toUpperCase();
  const hasBody = method !== 'GET' && method !== 'HEAD';

  return fetch(target, {
    method,
    headers,
    body: hasBody ? request.body : undefined,
    redirect: 'manual',
    // @ts-expect-error — Vercel Edge fetch supports duplex for streaming bodies
    duplex: hasBody ? 'half' : undefined,
  });
}
