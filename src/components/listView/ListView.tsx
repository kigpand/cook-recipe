import useRecipe from "../../store/recipe";
import styles from "./ListView.module.scss";

const ListView = () => {
  const { currentRecipe } = useRecipe();
  return (
    <div className={styles.listView} id="listView">
      {currentRecipe?.name}
    </div>
  );
};

export default ListView;
