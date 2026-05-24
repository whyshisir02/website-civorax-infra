import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";
import { handleAuthMiddleware } from "@/middleware/auth.middleware";
import { defaultLocale, type Locale } from "@/configs/locale.config";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  // Detect locale from pathname for auth middleware
  const segments = pathname.split("/");
  const maybeLocale = segments[1] as Locale;
  const locale = routing.locales.includes(maybeLocale) ? maybeLocale : defaultLocale;

  const authResponse = handleAuthMiddleware(request, locale);
  if (authResponse) return authResponse;

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match root and all locale-prefixed paths, skip Next.js internals and static files
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
