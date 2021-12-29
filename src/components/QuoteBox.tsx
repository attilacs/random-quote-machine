import styled from "styled-components";

const QuoteContainer = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 450px;
`;

const Text = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

const QuoteBox = () => {
  return (
    <QuoteContainer id="quote-box" data-test="quote-box">
      <Text id="text" data-test="text"></Text>
    </QuoteContainer>
  );
};

export default QuoteBox;
