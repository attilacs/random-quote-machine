import { getRandomInt, getRandomQuote } from "./Service";

describe("Random number generator", () => {
  test("should return 0", () => {
    expect(getRandomInt(0, 1)).toBe(0);
  });

  test("should return 10", () => {
    expect(getRandomInt(10, 11)).toBe(10);
  });

  test("should return a number greater than or equal to 5 and less than 21", () => {
    expect(getRandomInt(5, 21)).toBeGreaterThanOrEqual(5);
    expect(getRandomInt(5, 21)).toBeLessThan(21);
  });
});

describe("Random quote selector", () => {
  const quotes = [
    { quote: "Test quote1", author: "Test Author1" },
    { quote: "Test quote2", author: "Test Author2" }
  ];

  test("should not return the original quote", () => {
    expect(getRandomQuote(quotes[0], quotes)).not.toStrictEqual(quotes[0]);
  });

  test("should return the other quote from the array", () => {
    expect(getRandomQuote(quotes[1], quotes)).toStrictEqual(quotes[0]);
  });

  test("should return the only quote from the quotes array if the lenght of the array is 1", () => {
    expect(getRandomQuote(quotes[0], [quotes[1]])).toStrictEqual(quotes[1]);
  });
});
