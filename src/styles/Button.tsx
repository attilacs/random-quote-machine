import styled from "styled-components";

export const ButtonStyled = styled.a`
  align-items: center;
  background-color: ${(props) => props.theme.color};
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px;
  text-decoration: none;
  user-select: none;
`;
