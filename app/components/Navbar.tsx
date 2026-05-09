"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Descubre Fuengirola", href: "/que-hacer-en-fuengirola" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)} aria-label="Hostal Costabella — inicio">
          <Image
            src="/images/hotel_costabella_logo.png"
            alt="Hostal Costabella"
            width={200}
            height={50}
            className="navbar-logo-img"
            priority
          />
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
