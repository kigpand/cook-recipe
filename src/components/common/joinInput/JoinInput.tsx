import React from "react";
import styles from "./JoinInput.module.scss";
import Input from "../../atoms/input/Input";

interface IJoinInput {
  title: string;
  input: any;
  isPassword: boolean;
  onCheck?: () => void;
}

const JoinInput = ({ title, input, isPassword, onCheck }: IJoinInput) => {
  return (
    <div className={styles.joinInput}>
      <div className={styles.text}>{title}</div>
      <Input
        className={styles.input}
        onChange={input.onChange}
        isPassword={isPassword}
      />
      {title === "아이디" && (
        <div className={styles.idCheck} onClick={onCheck}>
          중복체크
        </div>
      )}
    </div>
  );
};

export default React.memo(JoinInput);
