import { NextRequest, NextResponse } from "next/server";
// import { getCurrentUser } from "./service/authService/cookietoken";
 import { getCurrentUser } from '@/service/authService';


type Role = "admin" | "landlord" | "tenant" | "user";


const roleBasedPrivateRoutes: Record<Role, RegExp[]> = {
  admin: [/^\/admin/],
  landlord: [/^\/landlord/],
  tenant: [/^\/tenant/],
  user: [/^\/user/],
};

const authRoutes = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url)
      );
    }
  }

  const role = user?.role as Role;

  const routes = roleBasedPrivateRoutes[role];

  if (routes?.some((route) => pathname.match(route))) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/landlord/:path*",
    "/tenant/:path*",
  ],
};
