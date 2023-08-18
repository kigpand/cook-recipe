import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface InputCom extends HTMLAttributes<HTMLInputElement> {
  isPassword: boolean;
}

const InputStyled = styled.input`
  height: 40px;
  border: 1px solid lightgray;
  outline: none;

  &::placeholder {
    color: lightgray;
  }
`;

const Input = React.memo(({ isPassword, ...props }: InputCom) => {
  return <InputStyled type={isPassword ? "password" : "text"} {...props} />;
});

export default Input;
