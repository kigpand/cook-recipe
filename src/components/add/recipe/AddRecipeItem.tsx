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
    if (input.value.trim() === "") return alert("레시피를 입력해 주세요");
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
              <div className={styles.text}>{item}</div>
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
