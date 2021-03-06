import axios from "axios";
import { Quote } from "../types/Quote";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const fetchQuotes = async () => {
  const { data } = await axios(url);
  return data["quotes"];
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomQuote = (currentQuote: Quote, quotes: Quote[]) => {
  if (quotes.length === 1) {
    return { ...quotes[0] };
  }
  let randomQuote = { ...currentQuote };
  while (randomQuote.quote === currentQuote.quote) {
    const randomIndex = getRandomInt(0, quotes.length);
    randomQuote = quotes[randomIndex];
  }
  return randomQuote;
};

export const getTwitterHref = (quote: string, author: string) => {
  const twitterUrl =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  return `${twitterUrl}${encodeURIComponent(
    '"' + quote + '" '
  )}${encodeURIComponent(author)}`;
};

export const getRandomHslValues = () => {
  const h = getRandomInt(0, 361);
  const s = 100;
  const l = getRandomInt(35, 51);
  return { h, s, l };
};

export const getHslString = (h: number, s: number, l: number) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
};
