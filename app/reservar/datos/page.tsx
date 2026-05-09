import Link from "next/link";
import { getBookingLocale } from "@/lib/booking/locale-server";
import { bookingCopy, roomName } from "@/lib/booking/strings";
import { getRoomById } from "@/lib/booking/catalog";
import { nightsBetween, formatStayDate } from "@/lib/booking/dates";
import { formatEur } from "@/lib/booking/format";

type PageSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function getStr(v: string | string[] | undefined, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

export default async function ReservarDatosPage({ searchParams }: { searchParams: PageSearchParams }) {
  const locale = await getBookingLocale();
  const t = bookingCopy(locale);
  const sp = await searchParams;

  const checkin = getStr(sp.checkin);
  const checkout = getStr(sp.checkout);
  const adults = getStr(sp.adults, "2");
  const children = getStr(sp.children, "0");
  const roomId = getStr(sp.room_id);
  const room = getRoomById(roomId);
  const nights = nightsBetween(checkin, checkout);
  const missingRoom = !room || nights === 0;

  const total = room && nights > 0 ? nights * room.pricePerNightEur : 0;

  return (
    <main className="hb-page">
      <div className="container hb-narrow">
        <header className="hb-header">
          <h1 className="hb-title">{t.detailsTitle}</h1>
          <p className="hb-lead">{t.detailsSubtitle}</p>
        </header>

        {missingRoom ? (
          <>
            <p className="hb-error" role="alert">
              {t.errorMissingRoom}
            </p>
            <Link href="/reservar" className="btn btn-primary">
              {t.searchCta}
            </Link>
          </>
        ) : (
          <>
            <div className="hb-card hb-card-muted">
              <p className="hb-inline-summary">
                <strong>{t.summaryRoom}:</strong> {roomName(locale, room.id)}
              </p>
              <p className="hb-inline-summary">
                <strong>{t.summaryStay}:</strong> {formatStayDate(checkin, locale)} —{" "}
                {formatStayDate(checkout, locale)} ({nights} {nights !== 1 ? t.nights : t.night})
              </p>
              <p className="hb-inline-summary">
                <strong>{t.summaryTotal}:</strong> {formatEur(total, locale)}
              </p>
            </div>

            <form className="hb-card" action="/reservar/pago" method="get">
              <input type="hidden" name="checkin" value={checkin} />
              <input type="hidden" name="checkout" value={checkout} />
              <input type="hidden" name="adults" value={adults} />
              <input type="hidden" name="children" value={children} />
              <input type="hidden" name="room_id" value={roomId} />

              <div className="hb-form-stack">
                <label className="hb-field">
                  <span className="hb-label">{t.fullName}</span>
                  <input type="text" name="guest_name" required autoComplete="name" className="hb-input" />
                </label>
                <label className="hb-field">
                  <span className="hb-label">{t.email}</span>
                  <input type="email" name="guest_email" required autoComplete="email" className="hb-input" />
                </label>
                <label className="hb-field">
                  <span className="hb-label">{t.phone}</span>
                  <input type="tel" name="guest_phone" required autoComplete="tel" className="hb-input" />
                </label>
                <label className="hb-field">
                  <span className="hb-label">{t.country}</span>
                  <input type="text" name="guest_country" autoComplete="country-name" className="hb-input" />
                </label>
                <label className="hb-field hb-field-full">
                  <span className="hb-label">{t.specialRequests}</span>
                  <textarea name="notes" rows={4} className="hb-input" placeholder={t.specialPlaceholder} />
                </label>
              </div>

              <div className="hb-card-actions">
                <Link
                  href={`/reservar/habitaciones?checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}&adults=${encodeURIComponent(adults)}&children=${encodeURIComponent(children)}`}
                  className="btn btn-outline"
                >
                  {t.back}
                </Link>
                <button type="submit" className="btn btn-primary">
                  {t.continuePayment}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
