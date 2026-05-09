import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/disponibilidad") {
    return NextResponse.redirect(new URL(`/reservar/habitaciones${search}`, request.url));
  }
  if (pathname === "/reserva") {
    return NextResponse.redirect(new URL(`/reservar/datos${search}`, request.url));
  }
  if (pathname === "/pago") {
    return NextResponse.redirect(new URL(`/reservar/pago${search}`, request.url));
  }
  if (pathname === "/reserva-confirmada") {
    return NextResponse.redirect(new URL(`/reservar/confirmacion${search}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/disponibilidad", "/reserva", "/pago", "/reserva-confirmada"],
};
