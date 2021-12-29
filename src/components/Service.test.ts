import { getRandomInt } from "./Service";

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
