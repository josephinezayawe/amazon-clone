export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

describe("test suite:formatCurrency", () => {
  it("convertscentsintoDollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("rounding", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
