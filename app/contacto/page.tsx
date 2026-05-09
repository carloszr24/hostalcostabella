import type { Metadata } from "next";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contacto | Hostal Costabella Fuengirola",
  description:
    "Contacta con el Hostal Costabella. Teléfono, email, WhatsApp y ubicación. Estamos en Av. de los Boliches 98, Fuengirola (Málaga).",
};

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola 👋, me gustaría consultar disponibilidad en Hostal Costabella para las siguientes fechas:\n\n📅 Entrada:\n📅 Salida:\n👥 Número de huéspedes:\n\nGracias 😊"
);

const CONTACT_ITEMS = [
  {
    icon: FaPhone,
    label: "Teléfonos",
    content: (
      <>
        <a href="tel:+34614060645">+34 614 06 06 45</a>
        <br />
        <a href="tel:+34951738151">+34 951 73 81 51</a>
      </>
    ),
  },
  {
    icon: FaEnvelope,
    label: "Email",
    content: (
      <a href="mailto:info@hostalcostabella.com">info@hostalcostabella.com</a>
    ),
  },
  {
    icon: FaLocationDot,
    label: "Dirección",
    content: (
      <>
        Av. de los Boliches 98<br />
        29640 Fuengirola (Málaga)
      </>
    ),
  },
  {
    icon: FaClock,
    label: "Horarios",
    content: (
      <>
        Check-in: 15:00 – 20:00 h<br />
        Check-out: hasta las 11:00 h<br />
        Recepción: 9:00 – 21:00 h
      </>
    ),
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>/</span>
            <span>Contacto</span>
          </div>
          <h1>Contacta con nosotros</h1>
          <p>
            Estamos aquí para ayudarte. Llámanos, escríbenos o visítanos en
            Fuengirola.
          </p>
        </div>
      </div>

      {/* Contact info + form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-grid">
            {/* Info */}
            <div className="contact-info-block">
              <span className="section-eyebrow">Información de contacto</span>
              <h3 style={{ marginBottom: "32px" }}>
                ¿Cómo podemos ayudarte?
              </h3>

              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="contact-info-item">
                    <div className="contact-info-icon">
                      <Icon />
                    </div>
                    <div className="contact-info-text">
                      <strong>{item.label}</strong>
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/34614060645?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>

              {/* Redes */}
              <div style={{ marginTop: "28px" }}>
                <p
                  style={{
                    fontSize: "0.76rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "var(--hostal-blue)",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  Síguenos en redes
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href="https://www.facebook.com/profile.php?id=61577588980046"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-icon"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/hostal.costabella"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-icon"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@hostal.costabella"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-social-icon"
                    aria-label="TikTok"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form">
              <span
                className="section-eyebrow"
                style={{ display: "block", marginBottom: "8px" }}
              >
                Formulario de contacto
              </span>
              <h3 style={{ marginBottom: "28px" }}>Envíanos un mensaje</h3>

              <form
                action="mailto:info@hostalcostabella.com"
                method="get"
                encType="text/plain"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkin">Fecha de entrada</label>
                    <input type="date" id="checkin" name="checkin" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="checkout">Fecha de salida</label>
                    <input type="date" id="checkout" name="checkout" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="huespedes">Número de huéspedes</label>
                  <select id="huespedes" name="huespedes">
                    <option value="">Selecciona...</option>
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5+">5 o más</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section style={{ background: "var(--hostal-bg)", padding: "0 0 80px" }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: "32px", paddingTop: "60px" }}>
            <span className="section-eyebrow">Cómo llegar</span>
            <h2 className="section-title">Encuéntranos en Fuengirola</h2>
            <p className="section-lead">
              Av. de los Boliches 98, 29640 Fuengirola (Málaga)
            </p>
          </div>
          <div
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 12px 48px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.4!2d-4.62!3d36.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f23d4d4d4d4d%3A0x0!2sHostal%20costabella!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="440"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Hostal Costabella"
            />
          </div>
        </div>
      </section>
    </>
  );
}
