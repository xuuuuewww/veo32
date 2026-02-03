import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLocaleFromPathname } from "@/lib/site";

export function middleware(request: NextRequest) {
  const locale = getLocaleFromPathname(request.nextUrl.pathname);
  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
