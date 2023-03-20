import ListItem from "../listItem/ListItem";
import styles from "./Lists.module.scss";

const Lists = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className={styles.lists}>
      <div className={styles.main}>여러분의 레시피를 등록해보세요!</div>
      {dummy.map((item: number) => {
        return <ListItem key={item} item={item} />;
      })}
    </div>
  );
};

export default Lists;
