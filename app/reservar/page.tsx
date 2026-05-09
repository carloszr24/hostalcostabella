import Link from "next/link";
import { getBookingLocale } from "@/lib/booking/locale-server";
import { bookingCopy } from "@/lib/booking/strings";
import { defaultCheckinCheckout } from "@/lib/booking/dates";

export default async function ReservarSearchPage() {
  const locale = await getBookingLocale();
  const t = bookingCopy(locale);
  const defaults = defaultCheckinCheckout();

  return (
    <main className="hb-page">
      <div className="container hb-narrow">
        <header className="hb-header">
          <h1 className="hb-title">{t.searchTitle}</h1>
          <p className="hb-lead">{t.searchSubtitle}</p>
        </header>

        <form className="hb-card" action="/reservar/habitaciones" method="get">
          <div className="hb-form-grid">
            <label className="hb-field">
              <span className="hb-label">{t.checkin}</span>
              <input type="date" name="checkin" required defaultValue={defaults.checkin} className="hb-input" />
            </label>
            <label className="hb-field">
              <span className="hb-label">{t.checkout}</span>
              <input type="date" name="checkout" required defaultValue={defaults.checkout} className="hb-input" />
            </label>
            <label className="hb-field">
              <span className="hb-label">{t.adults}</span>
              <input type="number" name="adults" min={1} max={8} defaultValue={2} required className="hb-input" />
            </label>
            <label className="hb-field">
              <span className="hb-label">{t.children}</span>
              <input type="number" name="children" min={0} max={6} defaultValue={0} required className="hb-input" />
            </label>
          </div>
          <div className="hb-card-actions">
            <Link href="/" className="btn btn-outline">
              {t.backHome}
            </Link>
            <button type="submit" className="btn btn-primary">
              {t.searchCta}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
