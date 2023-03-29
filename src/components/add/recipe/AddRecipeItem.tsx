import { useInput } from "../../../hook/userInput";
import styles from "./AddRecipeItem.module.scss";

interface IAddRecipeItem {
  recipes: string[];
  onAddRecipes: (data: string) => void;
  removeRecipes: (data: string) => void;
}

const AddRecipeItem = ({
  recipes,
  onAddRecipes,
  removeRecipes,
}: IAddRecipeItem) => {
  const input = useInput("");

  const onAdd = () => {
    onAddRecipes(input.value);
    input.onClear();
  };

  return (
    <div className={styles.addRecipeItem}>
      <div className={styles.title}>레시피 등록</div>
      <div className={styles.body}>
        <input
          type="text"
          className={styles.input}
          value={input.value}
          onChange={input.onChange}
        />
        <button className={styles.addBtn} onClick={onAdd}>
          등록
        </button>
      </div>
      <div className={styles.container}>
        {recipes.map((item: string, i: number) => {
          return (
            <div className={styles.item} key={i}>
              {item}
              <div className={styles.close} onClick={() => removeRecipes(item)}>
                x
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddRecipeItem;
