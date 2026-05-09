import Link from "next/link";
import FAQAccordion from "./components/FAQAccordion";
import {
  FaMapLocationDot,
  FaBed,
  FaTag,
  FaHandshake,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa6";

/* ── Datos ── */

const ROOMS = [
  {
    name: "Habitación Doble Matrimonial",
    capacity: "Hasta 2 personas",
    desc: "Amplia habitación con cama de matrimonio, baño privado y todo lo necesario para un descanso perfecto.",
    features: ["Cama matrimonial", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Doble Matrimonial",
  },
  {
    name: "Habitación Doble Camas Individuales",
    capacity: "Hasta 2 personas",
    desc: "Dos camas individuales perfectas para viajes con amigos, compañeros o familia.",
    features: ["2 camas individuales", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Doble Individual",
  },
  {
    name: "Habitación Triple",
    capacity: "Hasta 3 personas",
    desc: "Tres plazas cómodas para grupos pequeños o familias con niño.",
    features: ["3 plazas", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Triple",
  },
  {
    name: "Habitación Doble + Individual",
    capacity: "Hasta 3 personas",
    desc: "Combinación de cama doble y una individual, ideal para familias con un hijo.",
    features: ["Cama doble + individual", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Doble + Individual",
  },
  {
    name: "Habitación Familiar",
    capacity: "Hasta 4 personas",
    desc: "Nuestra habitación más amplia, con cama doble y dos individuales. Perfecta para toda la familia.",
    features: ["4 plazas", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Familiar",
  },
  {
    name: "Habitación Individual",
    capacity: "1 persona",
    desc: "Habitación individual funcional y acogedora para viajeros solos o estancias de trabajo.",
    features: ["1 plaza", "Baño privado", "WiFi gratis", "TV"],
    imgPlaceholder: "Individual",
  },
];

const VENTAJAS = [
  {
    icon: FaMapLocationDot,
    title: "Ubicación Privilegiada",
    desc: "A pocos metros de la playa y del centro de Fuengirola. Cerca de todo lo que necesitas.",
  },
  {
    icon: FaBed,
    title: "Habitaciones Cómodas",
    desc: "Espacios limpios, acogedores y bien equipados para que descanses como en casa.",
  },
  {
    icon: FaTag,
    title: "Mejor Precio",
    desc: "Reserva directamente con nosotros y garantiza el precio más bajo. Sin intermediarios.",
  },
  {
    icon: FaHandshake,
    title: "Atención Personalizada",
    desc: "Un equipo cercano y disponible para hacer de tu estancia una experiencia memorable.",
  },
];

const RESENAS = [
  {
    author: "María G.",
    type: "En pareja",
    text: "Lugar increíble a pasos de la playa. La habitación estaba impecable y el trato del personal fue excelente. Repetiremos sin duda.",
    rating: 5,
  },
  {
    author: "Carlos R.",
    type: "Viaje de trabajo",
    text: "Hostal limpio, bien situado y con muy buena relación calidad-precio. Todo lo que necesitas para una estancia sin complicaciones en Fuengirola.",
    rating: 5,
  },
  {
    author: "Ana y Javier",
    type: "En familia",
    text: "Fantástico para ir con niños. Habitación espaciosa, muy cerca del paseo marítimo y del centro. La atención fue de 10.",
    rating: 5,
  },
  {
    author: "Sophie L.",
    type: "Viajera sola",
    text: "Me sentí muy segura y cómoda. La ubicación es perfecta para explorar Fuengirola y los pueblos blancos de alrededor.",
    rating: 5,
  },
];

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola 👋, me gustaría consultar disponibilidad en Hostal Costabella para las siguientes fechas:\n\n📅 Entrada:\n📅 Salida:\n👥 Número de huéspedes:\n\nGracias 😊"
);

/* ── Componente de Hero con Cloudbeds ── */
function HeroCloudbedsPlaceholder() {
  return (
    <div
      className="hero-widget"
      style={{
        padding: "28px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "10px", letterSpacing: "1.5px", textTransform: "uppercase" }}>
        Motor de reservas
      </p>
      <p style={{ fontSize: "0.95rem", color: "#444", marginBottom: "18px" }}>
        Reserva directamente en el hostal y obtén el mejor precio garantizado.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/reservar"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--hostal-yellow)",
            color: "var(--hostal-dark)",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "16px 28px",
            borderRadius: "7px",
            textDecoration: "none",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          Reservar ahora
        </Link>
        <a
          href={`https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#25d366",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "2px",
            padding: "16px 28px",
            borderRadius: "7px",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp />
          Consultar por WhatsApp
        </a>
      </div>
      {/* Cuando tengas el Property ID de Cloudbeds, reemplaza esto por:
        <div id="ibe-container" />
        y añade el script en un componente client con next/script:
        <Script src="https://hotels.cloudbeds.com/widget/load/[PROPERTY_ID]" strategy="lazyOnload" />
      */}
    </div>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
        {/* Coloca el vídeo del hostal en /public/videos/hero-costabella.mp4 */}
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-costabella.jpg"
        >
          <source src="/videos/hero-costabella.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Tu alojamiento en Fuengirola</p>
          <h1 className="hero-title">
            Fuengirola te espera
          </h1>
          <p className="hero-subtitle">
            Hostal Costabella, a pasos de la playa y el corazón de Fuengirola.
            Reserva directamente y consigue el mejor precio.
          </p>
          <HeroCloudbedsPlaceholder />
          <div className="hero-actions">
            <Link href="/reservar" className="btn btn-primary">
              Reservar ahora
            </Link>
            <a href="tel:+34614060645" className="btn btn-white">
              Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* 2. DESCRIPCIÓN DEL HOSTAL */}
      <section className="descripcion-section">
        <div className="descripcion-inner">
          <div className="descripcion-text">
            <span className="section-eyebrow">Bienvenido</span>
            <h2>Tu casa en la Costa del Sol</h2>
            <p>
              El Hostal Costabella es el alojamiento ideal para descubrir Fuengirola y toda la Costa del Sol.
              Ubicado en plena Avenida de los Boliches, a pocos metros de la playa y del animado centro de la ciudad,
              te ofrecemos habitaciones limpias, cómodas y a un precio inmejorable.
            </p>
            <p>
              Ya sea que viajes en pareja, en familia o solo, en el Hostal Costabella encontrarás
              el espacio perfecto para descansar y disfrutar del sol mediterráneo.
              Reserva directamente con nosotros para garantizar el mejor precio disponible.
            </p>
            <Link href="/reservar" className="btn btn-primary">
              Reservar ahora →
            </Link>
          </div>
          <div>
            <div className="descripcion-image-placeholder">
              {/* Añade aquí una imagen real del hostal */}
              Foto del hostal
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRID DE HABITACIONES */}
      <section className="rooms-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Nuestras habitaciones</span>
            <h2 className="section-title">Elige tu habitación ideal</h2>
            <p className="section-lead">
              Seis tipos de habitaciones para adaptarnos a tus necesidades, ya vengas solo, en pareja o con toda la familia.
            </p>
          </div>
          <div className="rooms-grid">
            {ROOMS.map((room) => (
              <article key={room.name} className="room-card">
                <div className="room-card-img">
                  <span className="room-card-img-placeholder">{room.imgPlaceholder}</span>
                </div>
                <div className="room-card-body">
                  <h3 className="room-card-title">{room.name}</h3>
                  <p className="room-card-capacity">{room.capacity}</p>
                  <p className="room-card-desc">{room.desc}</p>
                  <div className="room-card-features">
                    {room.features.map((f) => (
                      <span key={f} className="room-card-feature">{f}</span>
                    ))}
                  </div>
                  <Link href="/reservar" className="room-card-btn">
                    Reservar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VENTAJAS */}
      <section className="ventajas-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">¿Por qué elegirnos?</span>
            <h2 className="section-title">Las ventajas de hospedarte con nosotros</h2>
          </div>
          <div className="ventajas-grid">
            {VENTAJAS.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="ventaja-item">
                  <div className="ventaja-icon">
                    <Icon />
                  </div>
                  <h5 className="ventaja-title">{v.title}</h5>
                  <p className="ventaja-desc">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. RESEÑAS */}
      <section className="resenas-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Lo que dicen nuestros huéspedes</span>
            <h2 className="section-title">Opiniones reales</h2>
          </div>
          <div className="resenas-grid">
            {RESENAS.map((r) => (
              <article key={r.author} className="resena-card">
                <div className="resena-stars">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <FaStar key={i} style={{ display: "inline" }} />
                  ))}
                </div>
                <p className="resena-text">"{r.text}"</p>
                <p className="resena-author">{r.author}</p>
                <p className="resena-date">{r.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="faq-section section-white">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* 7. MAPA + CONTACTO */}
      <section className="contacto-section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: "40px" }}>
            <span className="section-eyebrow">Cómo llegar</span>
            <h2 className="section-title">Encuéntranos en Fuengirola</h2>
          </div>
          <div className="contacto-grid">
            <div className="contacto-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4!2d-4.62!3d36.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f23d4d4d4d4d%3A0x0!2sHostal%20costabella!5e0!3m2!1ses!2ses!4v1"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Hostal Costabella Fuengirola"
              />
            </div>
            <div className="contacto-info">
              <div className="contacto-col">
                <h5>Teléfonos</h5>
                <p>
                  <a href="tel:+34614060645">+34 614 06 06 45</a><br />
                  <a href="tel:+34951738151">+34 951 73 81 51</a>
                </p>
              </div>
              <div className="contacto-col">
                <h5>Email</h5>
                <p>
                  <a href="mailto:info@hostalcostabella.com">
                    info@hostalcostabella.com
                  </a>
                </p>
              </div>
              <div className="contacto-col">
                <h5>Dirección</h5>
                <p>
                  Av. de los Boliches 98<br />
                  29640 Fuengirola (Málaga)
                </p>
              </div>
              <div className="contacto-col">
                <h5>Horarios</h5>
                <p>
                  Check-in: 15:00 – 20:00<br />
                  Check-out: hasta 11:00<br />
                  Recepción: 9:00 – 21:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <h2>Fuengirola te espera. Reserva sin intermediarios.</h2>
          <p>Mejor precio garantizado reservando directamente con nosotros.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reservar" className="btn btn-primary">
              Reservar ahora
            </Link>
            <a href="tel:+34614060645" className="btn btn-outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              Llamar al hostal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
