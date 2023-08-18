import { HTMLAttributes } from "react";
import styled from "styled-components";

interface IButton extends HTMLAttributes<HTMLDivElement> {
  type: string;
  text: string;
  onClick: () => void;
}

const ButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: white;
  cursor: pointer;
`;

const AddBtn = styled(ButtonStyled)`
  background-color: rgb(74, 74, 215);
  &:hover {
    background-color: rgb(100, 100, 250);
  }
`;

const CancleBtn = styled(ButtonStyled)`
  background-color: rgb(66, 66, 66);
  &:hover {
    background-color: rgb(44, 44, 44);
  }
`;

const Button = ({ type, text, onClick, ...props }: IButton) => {
  return type === "add" ? (
    <AddBtn onClick={onClick} {...props}>
      {text}
    </AddBtn>
  ) : (
    <CancleBtn onClick={onClick} {...props}>
      {text}
    </CancleBtn>
  );
};

export default Button;
