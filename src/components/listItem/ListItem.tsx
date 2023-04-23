import { useCallback, useState } from "react";
import { IRecipe } from "../../interface/IRecipe";
import styles from "./ListItem.module.scss";
import useRecipe from "../../store/recipe";

interface IListItem {
  item: IRecipe;
}

const ListItem = ({ item }: IListItem) => {
  const { setCurrentRecipe } = useRecipe();
  const [back, setBack] = useState<boolean>(false);

  const onView = useCallback(() => {
    setCurrentRecipe(item);
  }, [item]);

  return (
    <div
      className={styles.listItem}
      onClick={onView}
      onMouseOver={() => setBack(true)}
      onMouseLeave={() => setBack(false)}
    >
      <img
        src={item.imgUrl[0] || "imgs/noimg.png"}
        className={styles.img}
        alt="view"
      />
      {back && <div className={styles.back}>{item.name}</div>}
    </div>
  );
};

export default ListItem;
