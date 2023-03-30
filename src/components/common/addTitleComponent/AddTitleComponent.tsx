import styles from "./AddTitleComponent.module.scss";

interface IAddTitleComponent {
  title: string;
  input: any;
}

const AddTitleComponent = ({ title, input }: IAddTitleComponent) => {
  return (
    <div className={styles.addTitleComponent}>
      <div className={styles.text}>{title}</div>
      <input
        type="text"
        className={styles.input}
        value={input.value}
        onChange={input.onChange}
      />
    </div>
  );
};

export default AddTitleComponent;
