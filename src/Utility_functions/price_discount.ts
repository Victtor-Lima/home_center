export function price_discounts(original_price: number, price: number) {
  const ofTheTotalValue = (price * 100) / original_price;
  const discounts = (100 - ofTheTotalValue).toFixed().replace(".", ",");
  const result = `${discounts}% OFF`;

  return result;
}
