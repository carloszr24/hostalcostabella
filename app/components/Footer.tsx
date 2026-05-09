import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaPhone, FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="footer-primary">
        <div className="container">
          <div className="footer-grid">
            {/* Columna 1: Contacto */}
            <div className="footer-col">
              <h5>Contacto</h5>
              <p style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <FaLocationDot style={{ marginTop: "3px", flexShrink: 0, color: "var(--hostal-yellow)" }} />
                Av. de los Boliches 98, 29640<br />Fuengirola (Málaga)
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <FaPhone style={{ flexShrink: 0, color: "var(--hostal-yellow)" }} />
                <a href="tel:+34614060645">+34 614 06 06 45</a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <FaPhone style={{ flexShrink: 0, color: "var(--hostal-yellow)" }} />
                <a href="tel:+34951738151">+34 951 73 81 51</a>
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <FaEnvelope style={{ flexShrink: 0, color: "var(--hostal-yellow)" }} />
                <a href="mailto:info@hostalcostabella.com">info@hostalcostabella.com</a>
              </p>
              <p style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <FaClock style={{ marginTop: "3px", flexShrink: 0, color: "var(--hostal-yellow)" }} />
                <span>
                  Check-in: 15:00 – 20:00<br />
                  Check-out: hasta las 11:00<br />
                  Recepción: 9:00 – 21:00
                </span>
              </p>

              <div className="footer-socials" aria-label="Redes sociales">
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

            {/* Columna 2: vacío / logo */}
            <div className="footer-col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-heading), Montserrat, sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}>
                  Hostal<br /><span style={{ color: "var(--hostal-yellow)" }}>Costabella</span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>
                  Fuengirola · Málaga
                </p>
                <a
                  href="https://app.cloudbeds.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "20px",
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  Acceso gestión
                </a>
              </div>
            </div>

            {/* Columna 3: Menú */}
            <div className="footer-col">
              <h5>Menú</h5>
              <ul className="footer-menu-list">
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/habitaciones">Habitaciones</Link></li>
                <li><Link href="/nosotros">Nosotros</Link></li>
                <li><Link href="/que-hacer-en-fuengirola">Descubre Fuengirola</Link></li>
                <li><Link href="/contacto">Contacto</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-below">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Hostal Costabella · Av. de los Boliches 98, Fuengirola (Málaga) ·{" "}
            <a href="mailto:info@hostalcostabella.com" style={{ textDecoration: "underline", color: "inherit" }}>
              info@hostalcostabella.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
