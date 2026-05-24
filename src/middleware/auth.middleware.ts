import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, type Locale } from "@/configs/locale.config";

const AUTH_TOKEN_COOKIE = "auth-token";

// Routes that require authentication
const PROTECTED_PREFIXES = ["/dashboard", "/projects", "/billing", "/account"];

// Auth routes — authenticated users should not see these
const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

function isPortalRoute(pathname: string, locale: Locale): boolean {
  const stripped = pathname.replace(`/${locale}`, "") || "/";
  return PROTECTED_PREFIXES.some((prefix) => stripped.startsWith(prefix));
}

function isAuthRoute(pathname: string, locale: Locale): boolean {
  const stripped = pathname.replace(`/${locale}`, "") || "/";
  return AUTH_ROUTES.some((route) => stripped.startsWith(route));
}

function hasAuthToken(request: NextRequest): boolean {
  return !!request.cookies.get(AUTH_TOKEN_COOKIE)?.value;
}

export function handleAuthMiddleware(
  request: NextRequest,
  locale: Locale = defaultLocale
): NextResponse | null {
  const { pathname } = request.nextUrl;
  const authenticated = hasAuthToken(request);

  // Redirect unauthenticated users trying to access portal
  if (isPortalRoute(pathname, locale) && !authenticated) {
    const loginUrl = new URL(`/${locale}/login`, request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute(pathname, locale) && authenticated) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  return null;
}
