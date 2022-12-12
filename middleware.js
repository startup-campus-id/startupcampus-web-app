import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req, ev) {
  const currentEnv = process.env.NEXT_PUBLIC_APP_ENV;

  if (currentEnv === 'production' &&
    req.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://${req.headers.get('host')}${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}
