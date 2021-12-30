import { getRandomInt, getRandomQuote, getTwitterHref } from "./Service";

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

describe("Share quote link generator", () => {
  const quote = "Everything has beauty, but not everyone can see.";
  const author = "Confucius";
  const twitterHref =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Everything%20has%20beauty%2C%20but%20not%20everyone%20can%20see.%22%20Confucius";

  const quote2 =
    "The two most important days in your life are the day you are born and the day you find out why.";
  const author2 = "Mark Twain";
  const twitterHref2 =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20two%20most%20important%20days%20in%20your%20life%20are%20the%20day%20you%20are%20born%20and%20the%20day%20you%20find%20out%20why.%22%20Mark%20Twain";

  test("should generate a new tweet url", () => {
    expect(getTwitterHref(quote, author)).toBe(twitterHref);
    expect(getTwitterHref(quote2, author2)).toBe(twitterHref2);
  });
});
