import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const jwtToken = request.cookies.get("jwt_token")?.value;
  const tmToken = request.cookies.get("tm_token")?.value;
  const currentUser = jwtToken && tmToken;
  const path = request.nextUrl.pathname;
  const isPublic = path === "/login";

  if (isPublic && currentUser) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isPublic && !currentUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
