"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "¿A qué hora es el check-in y el check-out?",
    answer:
      "El check-in es de 15:00 a 20:00 h. Si llegas fuera de ese horario, contáctanos por teléfono o WhatsApp y buscaremos una solución. El check-out es hasta las 11:00 h.",
  },
  {
    question: "¿Cómo puedo reservar una habitación?",
    answer:
      "Puedes reservar directamente desde nuestra web usando el motor de reservas, lo que te garantiza el mejor precio disponible. También puedes llamarnos al +34 614 06 06 45 o al +34 951 73 81 51, o escribirnos a info@hostalcostabella.com.",
  },
  {
    question: "¿Dónde está ubicado el Hostal Costabella?",
    answer:
      "Estamos en la Avenida de los Boliches 98, 29640, Fuengirola (Málaga). A pocos minutos a pie de la playa y del centro de Fuengirola, con excelentes conexiones de transporte público.",
  },
  {
    question: "¿Admitís mascotas?",
    answer:
      "Actualmente no admitimos mascotas en el hostal. Si tienes dudas sobre alguna situación especial, no dudes en contactarnos directamente.",
  },
  {
    question: "¿Ofrecéis desayuno o servicios de comida?",
    answer:
      "No ofrecemos servicio de desayuno incluido en la habitación. Sin embargo, la zona cuenta con una gran variedad de cafeterías y restaurantes a pocos metros del hostal donde podrás disfrutar de la gastronomía local.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-list">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="faq-item">
          <button
            type="button"
            className={`faq-question${openIndex === index ? " open" : ""}`}
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div className={`faq-answer${openIndex === index ? " open" : ""}`}>
            <div className="faq-answer-inner">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
