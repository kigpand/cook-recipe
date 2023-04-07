import ListItem from "../listItem/ListItem";
import ListView from "../listView/ListView";
import styles from "./Lists.module.scss";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";

const Lists = () => {
  const { currentRecipe, recipes, setCurrentRecipe } = useRecipe();

  function onView(recipe: IRecipe) {
    setCurrentRecipe(recipe);
  }

  function unView() {
    if (currentRecipe) {
      const listView = document.getElementById("listView");
      if (listView) {
        listView.style.animation = "closeMotion 0.2s forwards";
        listView.addEventListener("animationend", () => {
          setCurrentRecipe(null);
        });
      }
    }
  }

  return (
    <div className={styles.lists} onClick={unView}>
      <div className={styles.main}>여러분의 레시피를 등록해보세요!</div>
      {recipes.map((item: IRecipe, i: number) => {
        return <ListItem key={i} item={item} onView={onView} />;
      })}
      {currentRecipe && <ListView />}
    </div>
  );
};

export default Lists;
