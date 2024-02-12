import { NextResponse } from "next/server";
export function middleware(request) {
  const response =
    NextResponse.next() && NextResponse.redirect(new URL("/auth", request.url));
  const cookie = request.cookies.get("access", {})?.value;
  const isPrevUrl = request.cookies.get("prevUrl", {})?.value;
  if (!isPrevUrl) {
    response.cookies.set("prevUrl", request.nextUrl.pathname);
  }
  if (!cookie) {
    return response;
  }
}
export const config = {
  matcher: [
    "/",
    "/mySubsidyPlan",
    "/myBasket",
    "/myBasket/:path*",
    "/orders",
    "/profile",
    "/products-list",
    "/product/:path*",
    "/suppliers-list",
    "/supplier/:path*",
    "/promotions",
  ],
};
