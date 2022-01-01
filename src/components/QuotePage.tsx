import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AppStyled from "../styles/AppStyled";
import QuotePageStyled from "../styles/QuotePage";
import { Quote } from "../types/Quote";
import QuoteBox from "./QuoteBox";
import { fetchQuotes, getRandomQuote } from "./Service";

const QuotePage = () => {
  const quotesQuery = useQuery("quotes", () => fetchQuotes());
  const { data: quotes, isLoading, isIdle, isError } = quotesQuery;
  const [randomQuote, setRandomQuote] = useState<Quote>({
    quote: "",
    author: ""
  });

  useEffect(() => {
    if (quotes) {
      setRandomQuote(getRandomQuote(randomQuote, quotes));
    }
  }, [quotes]);

  if (isLoading || isIdle) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>An error occurred...</>;
  }

  return (
    <QuotePageStyled>
      <AppStyled />
      <QuoteBox
        selectedQuote={randomQuote}
        setRandomQuote={setRandomQuote}
        randomQuote={randomQuote}
        quotes={quotes}
      />
    </QuotePageStyled>
  );
};

export default QuotePage;
