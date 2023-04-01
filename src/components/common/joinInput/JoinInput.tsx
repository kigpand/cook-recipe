import React from "react";
import styles from "./JoinInput.module.scss";

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
      <input
        type={isPassword ? "password" : "text"}
        className={styles.input}
        value={input.value}
        onChange={input.onChange}
      />
      {title === "아이디" && (
        <div className={styles.idCheck} onClick={onCheck}>
          중복체크
        </div>
      )}
      {title === "비밀번호 체크" && (
        <div className={styles.idCheck} onClick={onCheck}>
          PW check
        </div>
      )}
    </div>
  );
};

export default React.memo(JoinInput);
