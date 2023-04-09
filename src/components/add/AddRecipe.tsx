import { useCallback, useState } from "react";
import styles from "./AddRecipe.module.scss";
import AddImgFile from "./imgFile/AddImgFile";
import { useInput } from "../../hook/userInput";
import AddRecipeTag from "./tag/AddRecipeTag";
import AddRecipeMaterial from "./material/AddRecipeMaterial";
import AddRecipeItem from "./recipe/AddRecipeItem";
import { useItemArr } from "../../hook/useItemArr";
import AddTitleComponent from "../common/addTitleComponent/AddTitleComponent";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import useUser from "../../store/user";

const AddRecipe = () => {
  const { setRecipes, setOnAdd, saveRecipes, setSaveRecipes } = useRecipe();
  const { user } = useUser();
  const [img, setImg] = useState<string[]>([]);
  const tags = useItemArr([]);
  const materials = useItemArr([]);
  const recipeList = useItemArr([]);
  const title = useInput("");
  const content = useInput("");
  const link = useInput("");

  const addImg = useCallback((data: string[]) => {
    setImg(data);
  }, []);

  const onSubmit = () => {
    if (!user) return;
    const recipe: IRecipe = {
      id: user.id,
      name: title.value,
      material: materials.arr,
      imgUrl: img,
      recipe: recipeList.arr,
      tag: tags.arr,
      url: link.value,
      content: content.value,
    };
    setRecipes([...saveRecipes, recipe]);
    setSaveRecipes([...saveRecipes, recipe]);
    setOnAdd(false);
  };

  return (
    <div className={styles.addRecipe}>
      <div className={styles.back} onClick={() => setOnAdd(false)}></div>
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
          materials={materials.arr}
          onAddMaterials={materials.onAdd}
          removeMaterials={materials.onRemove}
        />
        <AddRecipeItem
          recipes={recipeList.arr}
          onAddRecipes={recipeList.onAdd}
          removeRecipes={recipeList.onRemove}
        />
        <AddTitleComponent title="소개" input={content} />
        <AddTitleComponent title="동영상 링크" input={link} />
        <div className={styles.btns}>
          <button className={styles.add} onClick={onSubmit}>
            등록
          </button>
          <button className={styles.cancle} onClick={() => setOnAdd(false)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
