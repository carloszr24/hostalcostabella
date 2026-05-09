"use client";

import { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { checkoutAfterNights, defaultCheckinCheckout, nightsBetween } from "@/lib/booking/dates";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola 👋, me gustaría consultar disponibilidad en Hostal Costabella para las siguientes fechas:\n\n📅 Entrada:\n📅 Salida:\n👥 Número de huéspedes:\n\nGracias 😊"
);

export default function HeroBookingWidget() {
  const def = defaultCheckinCheckout();
  const initialNights = Math.max(1, nightsBetween(def.checkin, def.checkout) || 2);

  const [checkin, setCheckin] = useState(def.checkin);
  const [nights, setNights] = useState(initialNights >= 1 ? initialNights : 2);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const checkout = useMemo(() => checkoutAfterNights(checkin, nights), [checkin, nights]);

  return (
    <div className="hero-widget hero-booking-widget">
      <p className="hero-widget-eyebrow">Motor de reservas</p>
      <p className="hero-widget-lead">
        Reserva directamente en el hostal y obtén el mejor precio garantizado.
      </p>

      <form className="hero-booking-form" action="/reservar/habitaciones" method="get">
        <input type="hidden" name="checkout" value={checkout} />
        <div className="hero-booking-fields">
          <label className="hero-booking-field">
            <span className="hero-booking-label">Entrada</span>
            <input
              type="date"
              name="checkin"
              required
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className="hero-booking-input"
            />
          </label>
          <label className="hero-booking-field">
            <span className="hero-booking-label">Noches</span>
            <select
              value={nights}
              onChange={(e) => setNights(parseInt(e.target.value, 10))}
              className="hero-booking-input"
              aria-label="Número de noches"
            >
              {Array.from({ length: 14 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "noche" : "noches"}
                </option>
              ))}
            </select>
          </label>
          <label className="hero-booking-field">
            <span className="hero-booking-label">Adultos</span>
            <input
              type="number"
              name="adults"
              min={1}
              max={8}
              required
              value={adults}
              onChange={(e) => setAdults(parseInt(e.target.value, 10) || 1)}
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
              value={children}
              onChange={(e) => setChildren(parseInt(e.target.value, 10) || 0)}
              className="hero-booking-input"
            />
          </label>
        </div>
        <p className="hero-booking-checkout-hint">
          Salida: <strong>{formatShortDate(checkout)}</strong>
        </p>
        <div className="hero-booking-actions">
          <button type="submit" className="hero-booking-btn hero-booking-btn-primary">
            Reservar ahora
          </button>
          <a
            href={`https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noreferrer"
            className="hero-booking-btn hero-booking-btn-wa"
          >
            <FaWhatsapp />
            Consultar por WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}

function formatShortDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return `${parseInt(d, 10)} ${months[parseInt(m, 10) - 1]} ${y}`;
}
