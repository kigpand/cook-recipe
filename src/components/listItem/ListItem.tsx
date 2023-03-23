import { useState } from "react";
import { IRecipe } from "../../interface/IRecipe";
import styles from "./ListItem.module.scss";

interface IListItem {
  item: IRecipe;
  onView: (recipe: IRecipe) => void;
}

const ListItem = ({ item, onView }: IListItem) => {
  const [back, setBack] = useState<boolean>(false);
  return (
    <div
      className={styles.listItem}
      onClick={() => onView(item)}
      onMouseOver={() => setBack(true)}
      onMouseLeave={() => setBack(false)}
    >
      <img src={item.imgUrl} className={styles.img} alt="view" />
      {back && <div className={styles.back}>{item.name}</div>}
    </div>
  );
};

export default ListItem;
