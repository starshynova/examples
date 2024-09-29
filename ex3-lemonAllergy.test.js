const { sanitizeFruitBasket, fruitBasket } = require("./ex3-lemonAllergy");
// ! Unit tests (using Jest)
describe("js-wk3-ex3-lemonAllergy", () => {
  test("sanitizeFruitBasket should take two parameters", () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test("sanitizeFruitBasket should not modify the original `fruitBasket` array", () => {
    const originalFruitBasketContents = [...fruitBasket];
    expect(originalFruitBasketContents.length).toBe(fruitBasket.length);
  });

  test("sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`", () => {
    const allergyArray = sanitizeFruitBasket(fruitBasket, "lemon");
    expect(allergyArray).not.toContain("lemon");
  });
});
