import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué hacer en Fuengirola | Hostal Costabella",
  description:
    "Descubre los mejores planes, playas, restaurantes y atracciones de Fuengirola. Todo lo que necesitas saber para disfrutar al máximo tu visita.",
};

const PLACES = [
  {
    tag: "Playas",
    title: "Playa de Los Boliches",
    desc: "Una de las mejores playas de Fuengirola, justo en frente del hostal. Arena fina, aguas tranquilas y una amplia oferta de chiringuitos.",
  },
  {
    tag: "Playas",
    title: "Playa de Santa Amalia",
    desc: "Playa familiar de arena dorada con todas las comodidades. Perfecta para el baño y el relax en familia.",
  },
  {
    tag: "Cultura",
    title: "Castillo Sohail",
    desc: "Fortaleza árabe con vistas panorámicas a Fuengirola y el Mediterráneo. Imprescindible para los amantes de la historia.",
  },
  {
    tag: "Naturaleza",
    title: "Bioparc Fuengirola",
    desc: "Reconocido como uno de los mejores zoos de Europa. Una experiencia única de inmersión en la naturaleza con animales de todo el mundo.",
  },
  {
    tag: "Ocio",
    title: "Puerto Deportivo",
    desc: "El puerto de Fuengirola es el corazón del ocio de la ciudad. Paseos, restaurantes, bares y un ambiente inmejorable al atardecer.",
  },
  {
    tag: "Gastronomía",
    title: "Paseo Marítimo",
    desc: "Kilómetros de paseo junto al mar con los mejores chiringuitos y restaurantes de la zona. Ideal para disfrutar del espeto de sardinas.",
  },
  {
    tag: "Excursiones",
    title: "Mijas Pueblo",
    desc: "A tan solo 10 km, el famoso pueblo blanco de Mijas es una excursión obligada. Sus calles empedradas y vistas al mar son inolvidables.",
  },
  {
    tag: "Excursiones",
    title: "Marbella y Puerto Banús",
    desc: "A 30 km, Marbella y su famoso Puerto Banús son el destino perfecto para un día de compras, gastronomía y lujo en la Costa del Sol.",
  },
  {
    tag: "Cultura",
    title: "Casco Antiguo de Fuengirola",
    desc: "Perderse por las calles del casco antiguo, visitar la Plaza de la Constitución y descubrir la historia de esta ciudad costera.",
  },
];

const TIPS = [
  {
    title: "Cómo moverse",
    desc: "Fuengirola está perfectamente comunicada. El tren de cercanías (Cercanías Málaga) conecta con el aeropuerto y Málaga en menos de 40 minutos. El bus y el taxi completan las opciones.",
  },
  {
    title: "Mejor época para visitar",
    desc: "Fuengirola tiene un clima mediterráneo excepcional. Los meses de mayo a octubre son ideales para la playa, aunque el invierno también es muy agradable con temperaturas suaves.",
  },
  {
    title: "Gastronomía típica",
    desc: "No te vayas sin probar los espetos de sardinas, el pescaíto frito, el gazpacho y los platos de marisco fresco. La gastronomía malagueña es única.",
  },
  {
    title: "Desde el hostal",
    desc: "Desde el Hostal Costabella, la playa está a 5 minutos a pie, el centro a 10 minutos y la estación de tren a 15 minutos. La ubicación perfecta.",
  },
];

export default function FuengirolaPlanPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Descubre Fuengirola</span>
          </div>
          <h1>Descubre Fuengirola</h1>
          <p>
            Playas increíbles, cultura, gastronomía y naturaleza. Todo lo que necesitas
            saber para aprovechar al máximo tu estancia en Fuengirola.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: "var(--hostal-white)", padding: "70px 0" }}>
        <div className="container" style={{ maxWidth: "760px", textAlign: "center" }}>
          <span className="section-eyebrow">La costa más bonita de Málaga</span>
          <h2 style={{ marginBottom: "20px" }}>Una ciudad para enamorarse</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
            Fuengirola es mucho más que sol y playa. Con 8 km de costa, un ambiente
            cosmopolita y una oferta cultural y gastronómica de primer nivel,
            es el destino perfecto para cualquier tipo de viajero.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8 }}>
            Desde el Hostal Costabella tienes todo a tu alcance: la playa a pasos,
            los mejores restaurantes a minutos y las excursiones más interesantes
            de la Costa del Sol a un tiro de piedra.
          </p>
        </div>
      </section>

      {/* Places */}
      <section style={{ background: "var(--hostal-bg)", padding: "70px 0" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Qué ver y hacer</span>
            <h2 className="section-title">Planes imprescindibles</h2>
          </div>
          <div className="places-grid">
            {PLACES.map((place) => (
              <article key={place.title} className="place-card">
                <div className="place-card-img">
                  {/* Imagen del lugar */}
                  {place.tag}
                </div>
                <div className="place-card-body">
                  <p className="place-card-tag">{place.tag}</p>
                  <h3 className="place-card-title">{place.title}</h3>
                  <p className="place-card-desc">{place.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ background: "var(--hostal-white)", padding: "70px 0" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Consejos prácticos</span>
            <h2 className="section-title">Antes de venir, ten en cuenta…</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {TIPS.map((tip) => (
              <div
                key={tip.title}
                style={{
                  background: "var(--hostal-bg)",
                  borderRadius: "10px",
                  padding: "28px",
                  borderLeft: "4px solid var(--hostal-yellow)",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    color: "var(--hostal-dark)",
                    marginBottom: "12px",
                    fontSize: "1rem",
                  }}
                >
                  {tip.title}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.75 }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa de la zona */}
      <section style={{ background: "var(--hostal-bg)", padding: "0 0 70px" }}>
        <div className="container">
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25586.6!2d-4.62!3d36.545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e3e6b6b6b6b6%3A0x0!2sFuengirola!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Fuengirola"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="container">
          <h2>¿Listo para explorar Fuengirola?</h2>
          <p>Reserva tu habitación en el Hostal Costabella y empieza tu aventura.</p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/habitaciones" className="btn btn-primary">
              Reservar habitación
            </Link>
            <Link
              href="/contacto"
              className="btn btn-outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
