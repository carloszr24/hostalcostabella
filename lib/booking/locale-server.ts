import { cookies } from "next/headers";
import { BOOKING_LOCALE_COOKIE } from "./constants";
import type { BookingLocale } from "./strings";

export async function getBookingLocale(): Promise<BookingLocale> {
  const jar = await cookies();
  const v = jar.get(BOOKING_LOCALE_COOKIE)?.value;
  return v === "en" ? "en" : "es";
}
