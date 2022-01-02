import { ButtonStyled } from "../styles/Button";
import { Quote } from "../types/Quote";
import { getRandomQuote } from "./Service";

interface NewQuoteParams {
  setRandomQuote: React.Dispatch<React.SetStateAction<Quote>>;
  randomQuote: Quote;
  quotes: Quote[];
  setRandomColors: Function;
  color: string;
}

const NewQuoteButton = ({
  setRandomQuote,
  randomQuote,
  quotes,
  setRandomColors,
  color
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
      theme={{ color: color }}
    >
      New quote
    </ButtonStyled>
  );
};

export default NewQuoteButton;
