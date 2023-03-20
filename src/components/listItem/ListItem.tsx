import styles from "./ListItem.module.scss";

interface IListItem {
  item: number;
}

const ListItem = ({ item }: IListItem) => {
  return <div className={styles.listItem}>{item}</div>;
};

export default ListItem;
