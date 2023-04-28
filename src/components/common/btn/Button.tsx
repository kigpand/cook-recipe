import styled from "styled-components";

interface IButton {
  type: string;
  width: string;
  height: string;
  text: string;
  marginTop?: string;
  marginLeft?: string;
  onClick: () => void;
}

interface IBtnStyled {
  width: string;
  height: string;
  marginTop: string;
  marginLeft: string;
}

const ButtonStyled = styled.div<IBtnStyled>`
  width: ${(prop) => prop.width};
  height: ${(prop) => prop.height};
  margin-top: ${(prop) => prop.marginTop};
  margin-left: ${(prop) => prop.marginLeft};
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

const Button = ({
  type,
  width,
  height,
  text,
  marginTop,
  marginLeft,
  onClick,
}: IButton) => {
  return type === "add" ? (
    <AddBtn
      width={width}
      height={height}
      marginTop={marginTop || "0px"}
      marginLeft={marginLeft || "0px"}
      onClick={onClick}
    >
      {text}
    </AddBtn>
  ) : (
    <CancleBtn
      width={width}
      height={height}
      marginTop={marginTop || "0px"}
      marginLeft={marginLeft || "0px"}
      onClick={onClick}
    >
      {text}
    </CancleBtn>
  );
};

export default Button;
