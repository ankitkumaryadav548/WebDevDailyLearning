import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET);

export async function proxy(request) {
  const token = request.cookies.get("session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    const role = payload.role;
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/admin") && role !== "admin") {
      const dashboardUrl = new URL("/dashboard", request.url);
      dashboardUrl.searchParams.set("error", "unauthorized");
      dashboardUrl.searchParams.set("required", "admin");
      dashboardUrl.searchParams.set("current", String(role));
      return NextResponse.redirect(dashboardUrl);
    }

    if (pathname.startsWith("/student") && role !== "student") {
      const dashboardUrl = new URL("/dashboard", request.url);
      dashboardUrl.searchParams.set("error", "unauthorized");
      dashboardUrl.searchParams.set("required", "student");
      dashboardUrl.searchParams.set("current", String(role));
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("session");
    return response;
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    "/student/:path*",
  ],
};