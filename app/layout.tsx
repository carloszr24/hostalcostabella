import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hostal Costabella | Alojamiento en Fuengirola, Málaga",
  description:
    "Hostal Costabella, tu alojamiento en Fuengirola. A pasos de la playa y el centro. Reserva directa sin intermediarios para el mejor precio garantizado.",
  keywords: "hostal fuengirola, alojamiento fuengirola, hostal costabella, hotel fuengirola málaga",
  openGraph: {
    title: "Hostal Costabella | Fuengirola, Málaga",
    description:
      "Alojamiento cómodo y céntrico en Fuengirola. Reserva directa en hostalcostabella.com.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${sourceSans3.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
