import styled from "styled-components";
import AppStyled from "../styles/AppStyled";

const QuotePageStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const QuotePage = () => {
  return (
    <QuotePageStyled>
      <AppStyled />
    </QuotePageStyled>
  );
};

export default QuotePage;
