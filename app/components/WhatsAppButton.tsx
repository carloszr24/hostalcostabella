"use client";

import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola 👋, me gustaría consultar disponibilidad en Hostal Costabella para las siguientes fechas:\n\n📅 Entrada:\n📅 Salida:\n👥 Número de huéspedes:\n\nGracias 😊"
);

const WHATSAPP_URL = `https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
