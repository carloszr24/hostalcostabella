import Link from "next/link";
import { getBookingLocale } from "@/lib/booking/locale-server";
import { bookingCopy, roomMeta, roomName } from "@/lib/booking/strings";
import { filterRoomsForGuests } from "@/lib/booking/catalog";
import { nightsBetween, formatStayDate, parseISODate } from "@/lib/booking/dates";
import { formatEur } from "@/lib/booking/format";

type PageSearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function getStr(v: string | string[] | undefined, fallback = "") {
  return typeof v === "string" ? v : fallback;
}

export default async function ReservarHabitacionesPage({ searchParams }: { searchParams: PageSearchParams }) {
  const locale = await getBookingLocale();
  const t = bookingCopy(locale);
  const sp = await searchParams;

  const checkin = getStr(sp.checkin);
  const checkout = getStr(sp.checkout);
  const adults = Math.max(1, parseInt(getStr(sp.adults, "2"), 10) || 2);
  const children = Math.max(0, parseInt(getStr(sp.children, "0"), 10) || 0);
  const totalGuests = adults + children;

  const ci = parseISODate(checkin);
  const co = parseISODate(checkout);
  const nights = nightsBetween(checkin, checkout);
  const datesInvalid = !ci || !co || co <= ci || nights === 0;
  const guestsInvalid = totalGuests < 1;

  const rooms =
    datesInvalid || guestsInvalid ? [] : filterRoomsForGuests(totalGuests);

  const queryBase = new URLSearchParams({
    checkin,
    checkout,
    adults: String(adults),
    children: String(children),
  });

  return (
    <main className="hb-page">
      <div className="container">
        <header className="hb-header">
          <h1 className="hb-title">{t.roomsTitle}</h1>
          <p className="hb-lead">{t.roomsSubtitle}</p>
        </header>

        <div className="hb-summary-bar">
          <div className="hb-summary-item">
            <span className="hb-summary-k">{t.checkin}</span>
            <strong>{checkin ? formatStayDate(checkin, locale) : "—"}</strong>
          </div>
          <div className="hb-summary-item">
            <span className="hb-summary-k">{t.checkout}</span>
            <strong>{checkout ? formatStayDate(checkout, locale) : "—"}</strong>
          </div>
          <div className="hb-summary-item">
            <span className="hb-summary-k">{t.guestsSummary}</span>
            <strong>
              {adults} {adults !== 1 ? t.adultsWord : t.adultWord}
              {children > 0
                ? ` · ${children} ${children !== 1 ? t.childrenWord : t.childWord}`
                : ""}
            </strong>
          </div>
          {!datesInvalid && nights > 0 && (
            <div className="hb-summary-item">
              <span className="hb-summary-k">{t.nights}</span>
              <strong>
                {nights} {nights !== 1 ? t.nights : t.night}
              </strong>
            </div>
          )}
        </div>

        {datesInvalid && (
          <p className="hb-error" role="alert">
            {t.errorDates}
          </p>
        )}
        {!datesInvalid && guestsInvalid && (
          <p className="hb-error" role="alert">
            {t.errorGuests}
          </p>
        )}
        {!datesInvalid && !guestsInvalid && rooms.length === 0 && (
          <p className="hb-error" role="alert">
            {t.errorRoom}
          </p>
        )}

        <div className="hb-room-grid">
          {rooms.map((room, idx) => {
            const total = nights * room.pricePerNightEur;
            const few = room.highlight || idx === 2;
            return (
              <article key={room.id} className="hb-room-card">
                <div className="hb-room-card-top">
                  <span className={`hb-badge${few ? " is-warn" : ""}`}>
                    {few ? t.availabilityFew : t.availabilityOk}
                  </span>
                  <h2 className="hb-room-name">{roomName(locale, room.id)}</h2>
                  <p className="hb-room-meta">{roomMeta(locale, room.id)}</p>
                </div>
                <div className="hb-room-pricing">
                  <p className="hb-price-line">
                    <span>
                      {formatEur(room.pricePerNightEur, locale)} / {t.perNight}
                    </span>
                  </p>
                  <p className="hb-price-total">
                    <span>{t.totalStay}</span>
                    <strong>{formatEur(total, locale)}</strong>
                  </p>
                  <p className="hb-price-note">{t.taxesNote}</p>
                </div>
                <form action="/reservar/datos" method="get">
                  <input type="hidden" name="checkin" value={checkin} />
                  <input type="hidden" name="checkout" value={checkout} />
                  <input type="hidden" name="adults" value={String(adults)} />
                  <input type="hidden" name="children" value={String(children)} />
                  <input type="hidden" name="room_id" value={room.id} />
                  <button type="submit" className="btn btn-primary hb-room-cta">
                    {t.selectRoom}
                  </button>
                </form>
              </article>
            );
          })}
        </div>

        <div className="hb-footer-actions">
          <Link href={`/reservar?${queryBase.toString()}`} className="btn btn-outline">
            {t.modifySearch}
          </Link>
        </div>
      </div>
    </main>
  );
}
