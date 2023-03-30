import { useState } from "react";
import styles from "./AddRecipe.module.scss";
import AddImgFile from "./imgFile/AddImgFile";
import { useInput } from "../../hook/userInput";
import AddRecipeTag from "./tag/AddRecipeTag";
import AddRecipeMaterial from "./material/AddRecipeMaterial";
import AddRecipeItem from "./recipe/AddRecipeItem";
import { useItemArr } from "../../hook/useItemArr";
import AddTitleComponent from "../common/addTitleComponent/AddTitleComponent";

const AddRecipe = () => {
  const [img, setImg] = useState<string[]>([]);
  const tags = useItemArr([]);
  const materails = useItemArr([]);
  const recipes = useItemArr([]);
  const title = useInput("");
  const content = useInput("");
  const link = useInput("");

  function addImg(data: string[]) {
    setImg(data);
  }

  const onSubmit = () => {
    console.log(img);
    console.log(title.value);
  };

  return (
    <div className={styles.addRecipe}>
      <div className={styles.container}>
        <div className={styles.header}>게시글 작성</div>
        <AddTitleComponent title="제목" input={title} />
        <AddImgFile addImg={addImg} />
        <AddRecipeTag
          tags={tags.arr}
          onAddTag={tags.onAdd}
          removeTag={tags.onRemove}
        />
        <AddRecipeMaterial
          materials={materails.arr}
          onAddMaterials={materails.onAdd}
          removeMaterials={materails.onRemove}
        />
        <AddRecipeItem
          recipes={recipes.arr}
          onAddRecipes={recipes.onAdd}
          removeRecipes={recipes.onRemove}
        />
        <AddTitleComponent title="소개" input={content} />
        <AddTitleComponent title="동영상 링크" input={link} />
        <div className={styles.btns}>
          <button className={styles.add} onClick={onSubmit}>
            등록
          </button>
          <button className={styles.cancle}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
