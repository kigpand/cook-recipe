import React from "react";
import styles from "./Input.module.scss";

interface IInput {
  width: string;
  placeholder: string;
  onChange: any;
}

const Input = React.memo(({ width, placeholder, onChange }: IInput) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      style={{ width: width }}
      onChange={onChange}
    />
  );
});

export default Input;
