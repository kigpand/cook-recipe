import React from "react";
import { useInput } from "../../../hook/userInput";
import AddLayout from "../../common/addLayout/AddLayout";
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
      <AddLayout title="레시피 등록" input={input} onAdd={onAdd} />
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

export default React.memo(AddRecipeItem);
