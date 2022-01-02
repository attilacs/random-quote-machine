import styled from "styled-components";

const QuotePageStyled = styled.div`
  align-items: center;
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme.color1},
    ${(props) => props.theme.color2}
  );
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export default QuotePageStyled;
