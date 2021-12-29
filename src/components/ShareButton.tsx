import { ReactElement } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";
import { ButtonStyled } from "../styles/Button";

interface ShareButtonProps {
  id: string;
  children: ReactElement<StyledIcon>;
  href: string;
}

const ShareButton = ({ id, children, href }: ShareButtonProps) => {
  return (
    <ButtonStyled id={id} href={href} target="_blank">
      {children}
    </ButtonStyled>
  );
};

export default ShareButton;
