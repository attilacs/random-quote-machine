import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AppStyled from "../styles/AppStyled";
import QuotePageStyled from "../styles/QuotePage";
import { Quote } from "../types/Quote";
import QuoteBox from "./QuoteBox";
import {
  fetchQuotes,
  getHslString,
  getRandomHslValues,
  getRandomQuote
} from "./Service";

const QuotePage = () => {
  const quotesQuery = useQuery("quotes", () => fetchQuotes());
  const { data: quotes, isLoading, isIdle, isError } = quotesQuery;
  const [randomQuote, setRandomQuote] = useState<Quote>({
    quote: "",
    author: ""
  });
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");

  const setRandomColors = () => {
    const hsl1 = getRandomHslValues();
    const hsl2 = getRandomHslValues();
    setColor1(getHslString(hsl1.h, hsl1.s, hsl1.l));
    setColor2(getHslString(hsl2.h, hsl2.s, hsl2.l));
  };

  useEffect(() => {
    if (quotes) {
      setRandomQuote(getRandomQuote(randomQuote, quotes));
      setRandomColors();
    }
  }, [quotes]);

  if (isLoading || isIdle) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>An error occurred...</>;
  }

  return (
    <QuotePageStyled theme={{ color1: color1, color2: color2 }}>
      <AppStyled />
      <QuoteBox
        selectedQuote={randomQuote}
        setRandomQuote={setRandomQuote}
        randomQuote={randomQuote}
        quotes={quotes}
        setRandomColors={setRandomColors}
        color={color1}
      />
    </QuotePageStyled>
  );
};

export default QuotePage;
