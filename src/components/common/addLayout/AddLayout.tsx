import React from "react";
import styles from "./AddLayout.module.scss";

interface IAddLayout {
  title: string;
  input: any;
  onAdd: () => void;
}

const AddLayout = ({ title, input, onAdd }: IAddLayout) => {
  return (
    <div className={styles.addLayout}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>
        <input
          type="text"
          className={styles.input}
          value={input.value}
          onChange={input.onChange}
        />
        <button className={styles.addBtn} onClick={onAdd}>
          등록
        </button>
      </div>
    </div>
  );
};

export default AddLayout;
