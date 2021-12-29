import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import AppStyled from "../styles/AppStyled";
import { Quote } from "../types/Quote";
import QuoteBox from "./QuoteBox";
import { fetchQuotes, getRandomQuote } from "./Service";

const QuotePageStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

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

  return (
    <QuotePageStyled>
      <AppStyled />
      <QuoteBox />
    </QuotePageStyled>
  );
};

export default QuotePage;
