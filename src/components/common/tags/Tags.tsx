import useRecipe from "../../../store/recipe";
import styles from "./Tags.module.scss";

const Tags = () => {
  const { currentRecipe } = useRecipe();
  return (
    <div className={styles.tags}>
      {currentRecipe!.tag.map((tag: string, i: number) => {
        return (
          <div className={styles.tag} key={i}>
            #{tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
