import styles from "./ListItem.module.scss";

interface IListItem {
  item: number;
  onView: () => void;
}

const ListItem = ({ item, onView }: IListItem) => {
  return (
    <div className={styles.listItem} onClick={onView}>
      {item}
    </div>
  );
};

export default ListItem;
