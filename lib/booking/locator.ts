import { createHash } from "crypto";

export function makeBookingLocator(parts: Record<string, string>): string {
  const payload = Object.keys(parts)
    .sort()
    .map((k) => `${k}=${parts[k] ?? ""}`)
    .join("&");
  const hex = createHash("sha256").update(payload).digest("hex").slice(0, 10).toUpperCase();
  return `HCB-${hex}`;
}
