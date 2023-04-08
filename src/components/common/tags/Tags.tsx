import { IRecipe } from "../../../interface/IRecipe";
import useRecipe from "../../../store/recipe";
import styles from "./Tags.module.scss";

const Tags = () => {
  const { currentRecipe, saveRecipes, setRecipes, setCurrentRecipe } =
    useRecipe();

  const onTag = (data: string) => {
    const filter = saveRecipes.filter((item: IRecipe) => {
      const result = item.tag.find((tag: string) => tag === data);
      return result ? item : false;
    });
    setCurrentRecipe(null);
    setRecipes(filter);
  };

  return (
    <div className={styles.tags}>
      {currentRecipe!.tag.map((tag: string, i: number) => {
        return (
          <div className={styles.tag} key={i} onClick={() => onTag(tag)}>
            #{tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
