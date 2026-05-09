"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaPhone } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Reservar", href: "/reservar" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Descubre Fuengirola", href: "/que-hacer-en-fuengirola" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="navbar-logo-text">
            Hostal <span>Costabella</span>
          </span>
        </Link>

        <nav aria-label="Menú principal">
          <ul className="navbar-menu">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-socials" aria-label="Redes sociales">
          <a
            href="https://www.facebook.com/profile.php?id=61577588980046"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/hostal.costabella"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@hostal.costabella"
            target="_blank"
            rel="noreferrer"
            className="navbar-social-link"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
        </div>

        <div className="navbar-cta">
          <a href="tel:+34614060645" aria-label="Llamar al 614 060 645">
            <FaPhone style={{ fontSize: "0.8rem" }} />
            614 060 645
          </a>
        </div>

        <button
          type="button"
          className={`navbar-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar-mobile${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-cta">
          <a href="tel:+34614060645">
            <FaPhone style={{ fontSize: "0.85rem" }} />
            Llamar: 614 060 645
          </a>
        </div>
      </div>
    </header>
  );
}
