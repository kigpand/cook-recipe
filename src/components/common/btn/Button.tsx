import styles from "./Button.module.scss";

interface IButton {
  width: string;
  text: string;
  color: string;
}

const Button = ({ width, text, color }: IButton) => {
  return (
    <div className={styles.btn} style={{ width: width }}>
      {text}
    </div>
  );
};

export default Button;
