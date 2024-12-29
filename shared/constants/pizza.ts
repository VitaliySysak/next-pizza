export const mapPizzaSize = {
  20: "Small",
  30: "Meddium",
  40: "Large",
} as const;

export const mapPizzaType = {
  1: "classic",
  2: "thin",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([name, value]) => ({
  name,
  value
}))