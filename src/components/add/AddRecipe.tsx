import { useState } from "react";
import styles from "./AddRecipe.module.scss";
import AddImgFile from "./imgFile/AddImgFile";
import { useInput } from "../../hook/userInput";
import AddRecipeTag from "./tag/AddRecipeTag";
import AddRecipeMaterial from "./material/AddRecipeMaterial";
import AddRecipeItem from "./recipe/AddRecipeItem";

const AddRecipe = () => {
  const [img, setImg] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<string[]>([]);
  const title = useInput("");

  function addImg(data: string[]) {
    setImg(data);
  }

  const onAddTag = (data: string) => {
    setTags([...tags, data]);
  };

  const removeTag = (data: string) => {
    const result = tags.filter((item: string) => item !== data);
    setTags(result);
  };

  const onAddMaterials = (data: string) => {
    setMaterials([...materials, data]);
  };

  const removeMaterials = (data: string) => {
    const result = materials.filter((item: string) => item !== data);
    setMaterials(result);
  };

  const onAddRecipes = (data: string) => {
    setRecipes([...recipes, data]);
  };

  const removeRecipes = (data: string) => {
    const result = recipes.filter((item: string) => item !== data);
    setRecipes(result);
  };

  const onSubmit = () => {
    console.log(img);
    console.log(title.value);
  };

  return (
    <div className={styles.addRecipe}>
      <div className={styles.container}>
        <div className={styles.header}>게시글 작성</div>
        <div className={styles.title}>
          <div className={styles.text}>제목</div>
          <input type="text" className={styles.input} />
        </div>
        <AddImgFile addImg={addImg} />
        <AddRecipeTag onAddTag={onAddTag} removeTag={removeTag} />
        <AddRecipeMaterial
          materials={materials}
          onAddMaterials={onAddMaterials}
          removeMaterials={removeMaterials}
        />
        <AddRecipeItem
          recipes={recipes}
          onAddRecipes={onAddRecipes}
          removeRecipes={removeRecipes}
        />
        <div className={styles.title}>
          <div className={styles.text}>링크</div>
          <input type="text" className={styles.input} />
        </div>
        <div onClick={onSubmit}>등록</div>
      </div>
    </div>
  );
};

export default AddRecipe;
