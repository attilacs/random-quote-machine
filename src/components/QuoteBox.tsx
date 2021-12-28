import styled from "styled-components";

const QuoteContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 450px;
`;

const QuoteBox = () => {
  return <QuoteContainer id="quote-box" data-test="quote-box"></QuoteContainer>;
};

export default QuoteBox;
