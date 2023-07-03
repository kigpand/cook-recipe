import { useCallback, useState } from "react";
import AddImgFile from "./AddImgFile";
import { useInput } from "../hook/userInput";
import AddRecipeTag from "./AddRecipeTag";
import AddRecipeMaterial from "./AddRecipeMaterial";
import AddRecipeItem from "./AddRecipeItem";
import { useItemArr } from "../hook/useItemArr";
import AddTitleComponent from "./AddTitleComponent";
import { IRecipe } from "../interface/IRecipe";
import useRecipe from "../store/recipe";
import useUser from "../store/user";

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
    <div className="w-screen h-screen bg-black4 fixed z-10 top-0 left-0 flex-center">
      <div
        className="w-full h-full absolute top-0 left-0 cursor-pointer"
        onClick={() => setOnAdd(false)}
      ></div>
      <div className="z-10 w-96 overflow-y-auto bg-white max-h-max70">
        <div className="p-3 bg-shadowBlue text-white">게시글 작성</div>
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
        <div className="py-3 px-5 flex-center">
          <button
            className="add-button bg-shadowBlue hover:bg-blue-500"
            onClick={onSubmit}
          >
            등록
          </button>
          <button
            className="add-button ml-3 bg-gray-500 hover:bg-gray-700"
            onClick={() => setOnAdd(false)}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
