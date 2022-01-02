import { ButtonStyled } from "../styles/Button";
import { Quote } from "../types/Quote";
import { getRandomQuote } from "./Service";

interface NewQuoteParams {
  setRandomQuote: React.Dispatch<React.SetStateAction<Quote>>;
  randomQuote: Quote;
  quotes: Quote[];
  setRandomColors: Function;
}

const NewQuoteButton = ({
  setRandomQuote,
  randomQuote,
  quotes,
  setRandomColors,
}: NewQuoteParams) => {
  const newQuote = () => {
    setRandomQuote(getRandomQuote(randomQuote, quotes));
    setRandomColors();
  };

  return (
    <ButtonStyled
      id="new-quote"
      data-test="new-quote"
      onClick={newQuote}
    >
      New quote
    </ButtonStyled>
  );
};

export default NewQuoteButton;
