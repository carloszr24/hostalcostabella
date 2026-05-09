import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp, FaBed, FaUsers } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Habitaciones | Hostal Costabella Fuengirola",
  description:
    "Descubre nuestras 6 tipos de habitaciones en Hostal Costabella: individuales, dobles, triples y familiares. Reserva directamente al mejor precio.",
};

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola 👋, me gustaría consultar disponibilidad en Hostal Costabella para las siguientes fechas:\n\n📅 Entrada:\n📅 Salida:\n👥 Número de huéspedes:\n\nGracias 😊"
);

const ROOMS = [
  {
    name: "Habitación Doble Matrimonial",
    capacity: "Hasta 2 personas",
    capacityNum: 2,
    beds: "1 cama matrimonial",
    desc: "Amplia habitación con cama de matrimonio, diseñada para estancias en pareja con todo el confort necesario. Baño privado completo, WiFi de alta velocidad y televisión de pantalla plana.",
    features: ["Cama matrimonial", "Baño privado", "WiFi gratis", "TV pantalla plana", "Aire acondicionado", "Calefacción"],
    imgPlaceholder: "Doble Matrimonial",
  },
  {
    name: "Habitación Doble Camas Individuales",
    capacity: "Hasta 2 personas",
    capacityNum: 2,
    beds: "2 camas individuales",
    desc: "Dos camas individuales perfectas para amigos, compañeros de viaje o familiares que prefieren descansar en camas separadas.",
    features: ["2 camas individuales", "Baño privado", "WiFi gratis", "TV pantalla plana", "Aire acondicionado", "Calefacción"],
    imgPlaceholder: "Doble Individual",
  },
  {
    name: "Habitación Triple",
    capacity: "Hasta 3 personas",
    capacityNum: 3,
    beds: "3 camas individuales",
    desc: "Tres plazas cómodas para grupos pequeños o familias con un hijo. Amplio espacio para que todos descansen con comodidad.",
    features: ["3 camas individuales", "Baño privado", "WiFi gratis", "TV pantalla plana", "Aire acondicionado"],
    imgPlaceholder: "Triple",
  },
  {
    name: "Habitación Doble + Individual",
    capacity: "Hasta 3 personas",
    capacityNum: 3,
    beds: "1 cama doble + 1 individual",
    desc: "Combinación de cama doble y una individual, la opción ideal para familias con un hijo o grupos de tres personas que requieren versatilidad.",
    features: ["Cama doble + individual", "Baño privado", "WiFi gratis", "TV pantalla plana", "Aire acondicionado"],
    imgPlaceholder: "Doble + Individual",
  },
  {
    name: "Habitación Familiar",
    capacity: "Hasta 4 personas",
    capacityNum: 4,
    beds: "1 cama doble + 2 individuales",
    desc: "Nuestra habitación más espaciosa, con cama doble y dos individuales. Diseñada para familias con dos hijos o grupos de cuatro personas.",
    features: ["Cama doble + 2 individuales", "Baño privado", "WiFi gratis", "TV pantalla plana", "Aire acondicionado"],
    imgPlaceholder: "Familiar",
  },
  {
    name: "Habitación Individual",
    capacity: "1 persona",
    capacityNum: 1,
    beds: "1 cama individual",
    desc: "Habitación individual funcional y acogedora para viajeros solos, trayectos de trabajo o estancias breves. Todo lo esencial a un precio muy competitivo.",
    features: ["Cama individual", "Baño privado", "WiFi gratis", "TV pantalla plana", "Calefacción"],
    imgPlaceholder: "Individual",
  },
];

export default function HabitacionesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Habitaciones</span>
          </div>
          <h1>Nuestras Habitaciones</h1>
          <p>
            6 tipos de habitaciones para adaptarnos a tus necesidades.
            Todas con baño privado, WiFi gratis y el mejor servicio.
          </p>
        </div>
      </div>

      {/* Cloudbeds widget placeholder — barra sticky */}
      <div
        style={{
          background: "var(--hostal-dark)",
          padding: "20px 0",
          borderBottom: "3px solid var(--hostal-yellow)",
          position: "sticky",
          top: "70px",
          zIndex: 100,
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
            <strong style={{ color: "var(--hostal-yellow)" }}>Reservas en la web oficial</strong> — Elige fechas y confirma al mejor precio:
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/reservar"
              className="btn btn-primary"
              style={{ padding: "12px 22px", fontSize: "0.8rem" }}
            >
              Reservar ahora
            </Link>
            <a
              href={`https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ padding: "12px 22px", fontSize: "0.8rem", borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="tel:+34614060645"
              className="btn btn-outline"
              style={{ padding: "12px 22px", fontSize: "0.8rem", borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              Llamar: 614 060 645
            </a>
          </div>
          {/* Cuando tengas el Property ID de Cloudbeds, añade aquí:
            <div id="ibe-container" />
          */}
        </div>
      </div>

      {/* Rooms list */}
      <section
        style={{ background: "var(--hostal-bg)", padding: "70px 0" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {ROOMS.map((room) => (
              <article key={room.name} className="room-card">
                <div className="room-card-img">
                  <span className="room-card-img-placeholder">{room.imgPlaceholder}</span>
                </div>
                <div className="room-card-body">
                  <h2
                    className="room-card-title"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {room.name}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      className="room-card-capacity"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FaUsers style={{ fontSize: "0.9rem" }} />
                      {room.capacity}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "#666",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FaBed style={{ color: "var(--hostal-dark)" }} />
                      {room.beds}
                    </span>
                  </div>
                  <p className="room-card-desc">{room.desc}</p>
                  <div className="room-card-features">
                    {room.features.map((f) => (
                      <span key={f} className="room-card-feature">
                        {f}
                      </span>
                    ))}
                  </div>
                  <Link href="/reservar" className="room-card-btn">
                    Reservar esta habitación
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Info adicional */}
      <section style={{ background: "var(--hostal-white)", padding: "70px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {[
              { title: "Check-in", value: "15:00 – 20:00 h" },
              { title: "Check-out", value: "Hasta las 11:00 h" },
              { title: "Recepción", value: "9:00 – 21:00 h" },
              { title: "Wifi", value: "Gratis en todas las habitaciones" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--hostal-bg)",
                  borderRadius: "10px",
                  padding: "28px 20px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--hostal-blue)",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--hostal-dark)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="container">
          <h2>¿Tienes dudas sobre la habitación?</h2>
          <p>Llámanos o escríbenos y te ayudamos a elegir la opción perfecta.</p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/reservar" className="btn btn-primary">
              Reservar ahora
            </Link>
            <a
              href={`https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
            <a
              href="tel:+34614060645"
              className="btn btn-outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              614 060 645
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
