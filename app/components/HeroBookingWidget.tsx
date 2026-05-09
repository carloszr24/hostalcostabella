"use client";

import { useCallback, useState } from "react";
import { checkoutAfterNights, defaultCheckinCheckout } from "@/lib/booking/dates";

export default function HeroBookingWidget() {
  const def = defaultCheckinCheckout();

  const [checkin, setCheckin] = useState(def.checkin);
  const [checkout, setCheckout] = useState(def.checkout);

  const minCheckout = checkoutAfterNights(checkin, 1);

  const syncCheckoutIfNeeded = useCallback(
    (nextCheckin: string, prevCheckout: string) => {
      if (prevCheckout <= nextCheckin) {
        return checkoutAfterNights(nextCheckin, 1);
      }
      return prevCheckout;
    },
    [],
  );

  return (
    <div className="hero-widget hero-booking-widget">
      <form className="hero-booking-form" action="/reservar/habitaciones" method="get">
        <div className="hero-booking-fields">
          <label className="hero-booking-field">
            <span className="hero-booking-label">Entrada</span>
            <input
              type="date"
              name="checkin"
              required
              value={checkin}
              onChange={(e) => {
                const v = e.target.value;
                setCheckin(v);
                setCheckout((co) => syncCheckoutIfNeeded(v, co));
              }}
              className="hero-booking-input"
            />
          </label>
          <label className="hero-booking-field">
            <span className="hero-booking-label">Salida</span>
            <input
              type="date"
              name="checkout"
              required
              min={minCheckout}
              value={checkout}
              onChange={(e) => setCheckout(e.target.value)}
              className="hero-booking-input"
            />
          </label>
          <label className="hero-booking-field">
            <span className="hero-booking-label">Adultos</span>
            <input
              type="number"
              name="adults"
              min={1}
              max={8}
              required
              defaultValue={2}
              className="hero-booking-input"
            />
          </label>
          <label className="hero-booking-field">
            <span className="hero-booking-label">Niños</span>
            <input
              type="number"
              name="children"
              min={0}
              max={6}
              required
              defaultValue={0}
              className="hero-booking-input"
            />
          </label>
        </div>
        <div className="hero-booking-actions">
          <button type="submit" className="hero-booking-btn hero-booking-btn-primary">
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
}
