import styles from "./Input.module.scss";

interface IInput {
  width: string;
  placeholder: string;
}

const Input = ({ width, placeholder }: IInput) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      style={{ width: width }}
    />
  );
};

export default Input;
