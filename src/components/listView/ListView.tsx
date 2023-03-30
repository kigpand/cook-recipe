import useRecipe from "../../store/recipe";
import Tags from "../common/tags/Tags";
import styles from "./ListView.module.scss";

const ListView = () => {
  const { currentRecipe } = useRecipe();
  return (
    <div className={styles.listView} id="listView">
      <div className={styles.title}>{currentRecipe?.name}</div>
      <img src={currentRecipe!.imgUrl[0]} alt="img" className={styles.img} />
      <Tags />
      <div className={styles.content}>{currentRecipe?.content}</div>
      <div className={styles.materials}>
        <div className={styles.materialTitle}>재료</div>
        <div className={styles.items}>
          {currentRecipe!.material.map((item: string, i: number) => {
            return (
              <div className={styles.item} key={i}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.recipe}>
        <div className={styles.recipeTitle}>조리 방법</div>
        <div className={styles.recipeList}>
          {currentRecipe!.recipe.map((item: string, i: number) => {
            return (
              <div className={styles.list} key={i}>
                <b>{i + 1}.</b>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <a
        href={currentRecipe!.url}
        className={styles.url}
        target={"_blank"}
        rel="noreferrer"
      >
        레시피 링크 바로가기
      </a>
    </div>
  );
};

export default ListView;