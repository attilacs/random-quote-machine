import styled from "styled-components";
import Author from "../styles/Author";
import QuoteContainer from "../styles/QuoteContainer";
import { Quote } from "../types/Quote";

const Text = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

interface QuoteBoxParams {
  selectedQuote: Quote;
}

const QuoteBox = ({ selectedQuote }: QuoteBoxParams) => {
  const { quote, author } = selectedQuote;
  return (
    <QuoteContainer id="quote-box" data-test="quote-box">
      <Text id="text" data-test="text">
        {quote}
      </Text>
      <Author id="author" data-test="author">
        {author}
      </Author>
    </QuoteContainer>
  );
};

export default QuoteBox;
