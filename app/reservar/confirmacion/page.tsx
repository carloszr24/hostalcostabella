import Link from "next/link";
import { getBookingLocale } from "@/lib/booking/locale-server";
import { bookingCopy, roomName } from "@/lib/booking/strings";
import { makeBookingLocator } from "@/lib/booking/locator";
import { formatStayDate } from "@/lib/booking/dates";
import { formatEur } from "@/lib/booking/format";
import { getRoomById } from "@/lib/booking/catalog";
import { nightsBetween } from "@/lib/booking/dates";

type PageSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function getStr(v: string | string[] | undefined, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

export default async function ReservarConfirmacionPage({ searchParams }: { searchParams: PageSearchParams }) {
  const locale = await getBookingLocale();
  const t = bookingCopy(locale);
  const sp = await searchParams;

  const checkin = getStr(sp.checkin);
  const checkout = getStr(sp.checkout);
  const roomId = getStr(sp.room_id);
  const guestName = getStr(sp.guest_name);
  const guestEmail = getStr(sp.guest_email);

  const room = getRoomById(roomId);
  const nights = nightsBetween(checkin, checkout);
  const total = room && nights > 0 ? nights * room.pricePerNightEur : 0;

  const locator = makeBookingLocator({
    room_id: roomId,
    checkin,
    checkout,
    guest_email: guestEmail,
  });

  return (
    <main className="hb-page hb-page-success">
      <div className="container hb-narrow">
        <div className="hb-success-icon" aria-hidden="true">
          ✓
        </div>
        <header className="hb-header">
          <h1 className="hb-title">{t.confirmTitle}</h1>
          <p className="hb-lead">{t.confirmSubtitle}</p>
        </header>

        <div className="hb-card hb-card-highlight">
          <p className="hb-locator">
            <span className="hb-locator-label">{t.confirmLocator}</span>
            <strong className="hb-locator-code">{locator}</strong>
          </p>
          {room && (
            <p>
              <strong>{t.summaryRoom}:</strong> {roomName(locale, room.id)}
            </p>
          )}
          <p>
            <strong>{t.summaryGuest}:</strong> {guestName}
          </p>
          <p>
            <strong>{t.summaryStay}:</strong> {formatStayDate(checkin, locale)} — {formatStayDate(checkout, locale)}
          </p>
          {total > 0 && (
            <p>
              <strong>{t.summaryTotal}:</strong> {formatEur(total, locale)}
            </p>
          )}
          <p className="hb-muted-note">{t.confirmEmailNote}</p>
        </div>

        <div className="hb-footer-actions">
          <Link href="/" className="btn btn-primary">
            {t.homeCta}
          </Link>
        </div>
      </div>
    </main>
  );
}
