import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey || supabaseUrl === 'your_supabase_url') {
      return NextResponse.next();
    }

    // @supabase/ssr sets a cookie named `sb-<project-ref>-auth-token`.
    // We detect any cookie whose name starts with "sb-" and ends with "-auth-token"
    // to stay compatible across different Supabase project refs.
    const cookies = request.cookies.getAll();
    const hasAuthCookie = cookies.some(
      (c) => c.name.startsWith('sb-') && c.name.endsWith('-auth-token') && c.value,
    );

    if (!hasAuthCookie) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
