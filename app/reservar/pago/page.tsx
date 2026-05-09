import { getBookingLocale } from "@/lib/booking/locale-server";
import PagoClient from "./PagoClient";

type PageSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function getStr(v: string | string[] | undefined, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

export default async function ReservarPagoPage({ searchParams }: { searchParams: PageSearchParams }) {
  const locale = await getBookingLocale();
  const sp = await searchParams;

  return (
    <PagoClient
      locale={locale}
      checkin={getStr(sp.checkin)}
      checkout={getStr(sp.checkout)}
      adults={getStr(sp.adults, "2")}
      children={getStr(sp.children, "0")}
      roomId={getStr(sp.room_id)}
      guestName={getStr(sp.guest_name)}
      guestEmail={getStr(sp.guest_email)}
      guestPhone={getStr(sp.guest_phone)}
      guestCountry={getStr(sp.guest_country)}
      notes={getStr(sp.notes)}
    />
  );
}
