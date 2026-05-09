export type RoomId =
  | "doble-matrimonial"
  | "doble-twin"
  | "triple"
  | "doble-mas-individual"
  | "familiar"
  | "individual";

export type RoomCatalogEntry = {
  id: RoomId;
  maxGuests: number;
  pricePerNightEur: number;
  highlight?: boolean;
};

export const ROOM_CATALOG: RoomCatalogEntry[] = [
  { id: "doble-matrimonial", maxGuests: 2, pricePerNightEur: 74 },
  { id: "doble-twin", maxGuests: 2, pricePerNightEur: 74 },
  { id: "triple", maxGuests: 3, pricePerNightEur: 96 },
  { id: "doble-mas-individual", maxGuests: 3, pricePerNightEur: 89 },
  { id: "familiar", maxGuests: 4, pricePerNightEur: 118, highlight: true },
  { id: "individual", maxGuests: 1, pricePerNightEur: 56 },
];

export function getRoomById(id: string): RoomCatalogEntry | undefined {
  return ROOM_CATALOG.find((r) => r.id === id);
}

export function filterRoomsForGuests(totalGuests: number): RoomCatalogEntry[] {
  return ROOM_CATALOG.filter((r) => r.maxGuests >= totalGuests);
}
