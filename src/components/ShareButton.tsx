import { ReactElement } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";
import { ButtonStyled } from "../styles/Button";

interface ShareButtonProps {
  id: string;
  children: ReactElement<StyledIcon>;
  href: string;
  color: string;
}

const ShareButton = ({ id, children, href, color }: ShareButtonProps) => {
  return (
    <ButtonStyled
      id={id}
      href={href}
      target="_blank"
      data-test={id}
      theme={{ color: color }}
    >
      {children}
    </ButtonStyled>
  );
};

export default ShareButton;
