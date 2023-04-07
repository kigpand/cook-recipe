import { IRecipe } from "../../../interface/IRecipe";
import useRecipe from "../../../store/recipe";
import styles from "./MobileListItem.module.scss";

interface IMobileListItem {
  item: IRecipe;
}

const MobileListItem = ({ item }: IMobileListItem) => {
  const { setCurrentRecipe } = useRecipe();

  function onView(recipe: IRecipe) {
    setCurrentRecipe(recipe);
  }

  return (
    <div className={styles.mobileListItem} onClick={() => onView(item)}>
      <img src={item.imgUrl[0]} className={styles.img} alt="view" />
      <div className={styles.body}>
        <div className={styles.title}>{item.name}</div>
        <div className={styles.content}>{item.content}</div>
      </div>
    </div>
  );
};

export default MobileListItem;
