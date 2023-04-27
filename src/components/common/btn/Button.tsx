import styles from "./Button.module.scss";

interface IButton {
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  marginTop?: string;
  marginLeft?: string;
  onClick: () => void;
}

const Button = ({
  width,
  height,
  text,
  backgroundColor,
  marginTop,
  marginLeft,
  onClick,
}: IButton) => {
  return (
    <div
      className={styles.btn}
      style={{
        width,
        height,
        backgroundColor,
        marginTop: marginTop || 0,
        marginLeft: marginLeft || 0,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
