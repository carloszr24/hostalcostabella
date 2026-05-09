"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import type { BookingLocale } from "@/lib/booking/strings";
import { bookingCopy, roomName } from "@/lib/booking/strings";
import { formatEur } from "@/lib/booking/format";
import { formatStayDate, nightsBetween } from "@/lib/booking/dates";
import { getRoomById } from "@/lib/booking/catalog";

type Props = {
  locale: BookingLocale;
  checkin: string;
  checkout: string;
  adults: string;
  children: string;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guestCountry: string;
  notes: string;
};

export default function PagoClient({
  locale,
  checkin,
  checkout,
  adults,
  children: childrenCount,
  roomId,
  guestName,
  guestEmail,
  guestPhone,
  guestCountry,
  notes,
}: Props) {
  const router = useRouter();
  const t = bookingCopy(locale);
  const [method, setMethod] = useState<"card" | "bizum" | "transfer">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [processing, setProcessing] = useState(false);

  const room = getRoomById(roomId);
  const nights = nightsBetween(checkin, checkout);
  const total = room && nights > 0 ? nights * room.pricePerNightEur : 0;

  const confirmationQuery = useMemo(() => {
    const p = new URLSearchParams();
    p.set("checkin", checkin);
    p.set("checkout", checkout);
    p.set("adults", adults);
    p.set("children", childrenCount);
    p.set("room_id", roomId);
    p.set("guest_name", guestName);
    p.set("guest_email", guestEmail);
    p.set("guest_phone", guestPhone);
    p.set("guest_country", guestCountry);
    p.set("notes", notes);
    return p.toString();
  }, [checkin, checkout, adults, childrenCount, roomId, guestName, guestEmail, guestPhone, guestCountry, notes]);

  const handlePay = () => {
    if (processing || !room || nights === 0) return;
    setProcessing(true);
    window.setTimeout(() => {
      router.push(`/reservar/confirmacion?${confirmationQuery}`);
    }, 2000);
  };

  if (!room || nights === 0) {
    return (
      <main className="hb-page">
        <div className="container hb-narrow">
          <p className="hb-error" role="alert">
            {t.errorMissingRoom}
          </p>
          <Link href="/reservar" className="btn btn-primary">
            {t.searchCta}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="hb-page">
      <div className="container hb-narrow">
        <header className="hb-header">
          <h1 className="hb-title">{t.paymentTitle}</h1>
          <p className="hb-lead">{t.paymentSubtitle}</p>
        </header>

        <div className="hb-card hb-card-muted">
          <p>
            <strong>{t.summaryRoom}:</strong> {roomName(locale, room.id)}
          </p>
          <p>
            <strong>{t.summaryGuest}:</strong> {guestName} ({guestEmail})
          </p>
          <p>
            <strong>{t.summaryStay}:</strong> {formatStayDate(checkin, locale)} — {formatStayDate(checkout, locale)}
          </p>
          <p className="hb-pay-total">
            <strong>{t.summaryTotal}:</strong> {formatEur(total, locale)}
          </p>
        </div>

        <div className="hb-card">
          <fieldset className="hb-pay-methods">
            <legend className="hb-label hb-legend">{t.payMethodCard}</legend>
            <label className="hb-radio">
              <input type="radio" name="pay" checked={method === "card"} onChange={() => setMethod("card")} />
              {t.payMethodCard}
            </label>
            <label className="hb-radio">
              <input type="radio" name="pay" checked={method === "bizum"} onChange={() => setMethod("bizum")} />
              {t.payMethodBizum}
            </label>
            <label className="hb-radio">
              <input type="radio" name="pay" checked={method === "transfer"} onChange={() => setMethod("transfer")} />
              {t.payMethodTransfer}
            </label>
          </fieldset>

          {method === "card" && (
            <div className="hb-form-stack hb-pay-card-fields">
              <label className="hb-field">
                <span className="hb-label">{t.cardNumber}</span>
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  className="hb-input"
                  placeholder="0000 0000 0000 0000"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </label>
              <div className="hb-form-grid hb-form-grid-2">
                <label className="hb-field">
                  <span className="hb-label">{t.cardExpiry}</span>
                  <input
                    type="text"
                    className="hb-input"
                    placeholder="MM/YY"
                    autoComplete="cc-exp"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </label>
                <label className="hb-field">
                  <span className="hb-label">{t.cardCvc}</span>
                  <input
                    type="text"
                    className="hb-input"
                    placeholder="123"
                    autoComplete="cc-csc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </label>
              </div>
            </div>
          )}

          <div className="hb-card-actions">
            <Link
              href={`/reservar/datos?checkin=${encodeURIComponent(checkin)}&checkout=${encodeURIComponent(checkout)}&adults=${encodeURIComponent(adults)}&children=${encodeURIComponent(childrenCount)}&room_id=${encodeURIComponent(roomId)}`}
              className="btn btn-outline"
            >
              {t.back}
            </Link>
            <button type="button" className="btn btn-primary" onClick={handlePay} disabled={processing}>
              {processing ? t.payProcessing : t.payCta}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
