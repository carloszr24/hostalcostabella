import type { Metadata } from "next";
import { getBookingLocale } from "@/lib/booking/locale-server";
import { bookingCopy } from "@/lib/booking/strings";
import BookingShell from "./BookingShell";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getBookingLocale();
  const t = bookingCopy(locale);
  return { title: t.metaTitle };
}

export default async function ReservarLayout({ children }: { children: React.ReactNode }) {
  const locale = await getBookingLocale();
  return <BookingShell locale={locale}>{children}</BookingShell>;
}
