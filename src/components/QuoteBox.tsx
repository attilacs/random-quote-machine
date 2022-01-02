import Author from "../styles/Author";
import Text from "../styles/Text";
import QuoteContainer from "../styles/QuoteContainer";
import { Quote } from "../types/Quote";
import {
  ButtonContainer,
  ShareButtonContainer
} from "../styles/ButtonContainer";
import ShareButton from "./ShareButton";
import { Twitter } from "@styled-icons/boxicons-logos";
import { getTwitterHref } from "./Service";
import NewQuoteButton from "./NewQuoteButton";

interface QuoteBoxParams {
  selectedQuote: Quote;
  setRandomQuote: React.Dispatch<React.SetStateAction<Quote>>;
  randomQuote: Quote;
  quotes: Quote[];
  setRandomColors: Function;
  color: string;
}

const QuoteBox = ({
  selectedQuote,
  setRandomQuote,
  randomQuote,
  quotes,
  setRandomColors,
  color
}: QuoteBoxParams) => {
  const { quote, author } = selectedQuote;
  const twitterHref = getTwitterHref(quote, author);

  return (
    <QuoteContainer id="quote-box" data-test="quote-box">
      <Text id="text" data-test="text">
        {quote}
      </Text>
      <Author id="author" data-test="author">
        {author}
      </Author>
      <ButtonContainer>
        <ShareButtonContainer>
            <ShareButton id="tweet-quote" href={twitterHref} color={color}>
            <Twitter size="28" />
          </ShareButton>
        </ShareButtonContainer>
        <NewQuoteButton
          setRandomQuote={setRandomQuote}
          randomQuote={randomQuote}
          quotes={quotes}
            setRandomColors={setRandomColors}
            color={color}
        />
      </ButtonContainer>
    </QuoteContainer>
  );
};

export default QuoteBox;
