import type { Metadata } from "next";
import Link from "next/link";
import { FaHeart, FaLeaf, FaMedal, FaHandshake, FaStar } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Nosotros | Hostal Costabella Fuengirola",
  description:
    "Conoce la historia y el equipo del Hostal Costabella. Un alojamiento familiar en el corazón de Fuengirola con décadas de experiencia.",
};

const VALUES = [
  {
    icon: FaHeart,
    title: "Trato Familiar",
    desc: "Somos un hostal familiar donde cada huésped es tratado como en casa. Tu comodidad y satisfacción son nuestra prioridad.",
  },
  {
    icon: FaMedal,
    title: "Calidad Garantizada",
    desc: "Habitaciones limpias, cómodas y bien mantenidas. Nos enorgullece ofrecer un servicio de calidad a precios justos.",
  },
  {
    icon: FaLeaf,
    title: "Sostenibilidad",
    desc: "Comprometidos con el medio ambiente: ahorro energético, reciclaje y prácticas sostenibles en el día a día del hostal.",
  },
  {
    icon: FaHandshake,
    title: "Honestidad",
    desc: "Precio transparente, sin sorpresas. Reserva directamente con nosotros y obtén el mejor precio garantizado.",
  },
  {
    icon: FaStar,
    title: "Experiencia",
    desc: "Años de experiencia en el sector del turismo nos avalan. Conocemos Fuengirola y la Costa del Sol como nadie.",
  },
  {
    icon: FaHeart,
    title: "Ubicación Premium",
    desc: "Situados en plena Avenida de los Boliches, a metros de la playa y del centro de Fuengirola.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Nosotros</span>
          </div>
          <h1>Sobre el Hostal Costabella</h1>
          <p>
            Un hostal familiar en el corazón de Fuengirola, con décadas de experiencia
            acogiendo viajeros de todo el mundo.
          </p>
        </div>
      </div>

      {/* Historia */}
      <section
        style={{
          background: "var(--hostal-white)",
          padding: "90px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-eyebrow">Nuestra historia</span>
              <h2 style={{ marginBottom: "20px" }}>Desde el primer día, tu comodidad</h2>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px" }}>
                El Hostal Costabella nació con una misión clara: ofrecer un alojamiento de calidad
                en Fuengirola a un precio justo, con el trato cercano y familiar que los grandes hoteles
                no pueden dar.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px" }}>
                Situados en la Avenida de los Boliches 98, a pocos pasos de la playa y del animado
                centro de la ciudad, hemos acogido a miles de viajeros que han encontrado en nosotros
                mucho más que un lugar donde dormir: su hogar en la Costa del Sol.
              </p>
              <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
                Hoy, con la misma ilusión de siempre, seguimos mejorando nuestras instalaciones y
                servicios para que tu estancia en Fuengirola sea perfecta.
              </p>
              <Link href="/contacto" className="btn btn-primary">
                Contactar con nosotros
              </Link>
            </div>
            <div>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "linear-gradient(135deg, var(--hostal-dark) 0%, var(--hostal-blue) 100%)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.76rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  boxShadow: "0 20px 60px rgba(16, 69, 97, 0.2)",
                }}
              >
                Foto del hostal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        style={{ background: "var(--hostal-bg)", padding: "90px 0" }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Nuestros valores</span>
            <h2 className="section-title">¿Qué nos hace diferentes?</h2>
          </div>
          <div className="nosotros-values">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="value-card">
                  <div className="value-card-icon">
                    <Icon />
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section style={{ background: "var(--hostal-white)", padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            {[
              { number: "6", label: "Tipos de habitación" },
              { number: "9:00 – 21:00", label: "Atención en recepción" },
              { number: "98", label: "Av. de los Boliches" },
              { number: "★★★★★", label: "Valoración de nuestros clientes" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--hostal-bg)",
                  borderRadius: "12px",
                  padding: "32px 20px",
                  borderTop: "4px solid var(--hostal-yellow)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading), Montserrat, sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--hostal-dark)",
                    marginBottom: "10px",
                    lineHeight: 1.2,
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="container">
          <h2>Ven y conócenos en persona</h2>
          <p>Estamos en Fuengirola esperándote. Reserva tu habitación hoy.</p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/habitaciones" className="btn btn-primary">
              Ver habitaciones
            </Link>
            <Link
              href="/contacto"
              className="btn btn-outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
