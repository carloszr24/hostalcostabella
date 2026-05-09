"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BOOKING_LOCALE_COOKIE } from "@/lib/booking/constants";
import type { BookingLocale } from "@/lib/booking/strings";
import { bookingCopy } from "@/lib/booking/strings";

type Props = {
  locale: BookingLocale;
  children: React.ReactNode;
};

const STEPS = [
  { path: "/reservar", key: "stepSearch" as const },
  { path: "/reservar/habitaciones", key: "stepRooms" as const },
  { path: "/reservar/datos", key: "stepDetails" as const },
  { path: "/reservar/pago", key: "stepPayment" as const },
];

function bookingStepIndex(pathname: string): number {
  if (pathname.startsWith("/reservar/confirmacion")) return 4;
  if (pathname === "/reservar/habitaciones") return 1;
  if (pathname === "/reservar/datos") return 2;
  if (pathname === "/reservar/pago") return 3;
  return 0;
}

export default function BookingShell({ locale, children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const t = bookingCopy(locale);

  const stepIndex = bookingStepIndex(pathname);

  const setLocale = (next: BookingLocale) => {
    document.cookie = `${BOOKING_LOCALE_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="hb-shell">
      <div className="hb-shell-bar">
        <div className="container hb-shell-inner">
          <Link href="/" className="hb-shell-brand">
            Hostal <strong>Costabella</strong>
          </Link>
          <div className="hb-shell-lang" role="group" aria-label="Language">
            <button
              type="button"
              className={`hb-lang-btn${locale === "es" ? " is-active" : ""}`}
              onClick={() => setLocale("es")}
            >
              {t.langEs}
            </button>
            <button
              type="button"
              className={`hb-lang-btn${locale === "en" ? " is-active" : ""}`}
              onClick={() => setLocale("en")}
            >
              {t.langEn}
            </button>
          </div>
        </div>
      </div>

      {!pathname.startsWith("/reservar/confirmacion") && (
        <div className="hb-steps-wrap">
          <div className="container">
            <ol className="hb-steps" aria-label="Booking steps">
              {STEPS.map((step, i) => {
                const label = t[step.key];
                const done = i < stepIndex;
                const current = i === stepIndex;
                return (
                  <li key={step.path} className={`hb-step${current ? " is-current" : ""}${done ? " is-done" : ""}`}>
                    <span className="hb-step-num">{i + 1}</span>
                    <span className="hb-step-label">{label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
