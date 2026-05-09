export function parseISODate(value: string): Date | null {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [y, m, d] = value.split("-").map((n) => parseInt(n, 10));
  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) return null;
  return date;
}

export function nightsBetween(checkin: string, checkout: string): number {
  const a = parseISODate(checkin);
  const b = parseISODate(checkout);
  if (!a || !b) return 0;
  const diff = Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export function formatStayDate(iso: string, locale: "es" | "en"): string {
  const d = parseISODate(iso);
  if (!d) return "—";
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function defaultCheckinCheckout(): { checkin: string; checkout: string } {
  const today = new Date();
  const start = new Date(today);
  start.setDate(start.getDate() + 1);
  const end = new Date(start);
  end.setDate(end.getDate() + 2);
  return { checkin: toISO(start), checkout: toISO(end) };
}

function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Salida = entrada + número de noches (días de estancia en la habitación). */
export function checkoutAfterNights(checkinISO: string, nights: number): string {
  const d = parseISODate(checkinISO);
  if (!d || nights < 1) return checkinISO;
  const out = new Date(d);
  out.setDate(out.getDate() + nights);
  return toISO(out);
}
