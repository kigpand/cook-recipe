import { IRecipe } from "../../../interface/IRecipe";
import useRecipe from "../../../store/recipe";
import MobileListItem from "../../listItem/mobile/MobileListItem";
import ListView from "../../listView/ListView";
import styles from "./MobileLists.module.scss";

const MobileLists = () => {
  const { recipes, currentRecipe } = useRecipe();

  return (
    <div className={styles.mobileLists}>
      <div className={styles.header}>여러분만의 레시피를 등록해보세요!</div>
      {recipes.map((item: IRecipe, i: number) => {
        return <MobileListItem key={i} item={item} />;
      })}
      {currentRecipe && <ListView />}
    </div>
  );
};

export default MobileLists;
