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
import { addContent } from "../api/firebase";
import { useMutation } from "@tanstack/react-query";
import Loading from "./Loading";

const AddRecipe = ({ refetch }: any) => {
  const { setOnAdd } = useRecipe();
  const { user } = useUser();
  const [img, setImg] = useState<string[]>([]);
  const tags = useItemArr([]);
  const materials = useItemArr([]);
  const recipeList = useItemArr([]);
  const title = useInput("");
  const content = useInput("");
  const link = useInput("");
  const updateRecipe = useMutation(({ recipe }: any) => addContent(recipe), {
    onSuccess: () => {
      refetch();
      setOnAdd(false);
    },
  });

  const addImg = useCallback((data: string[]) => {
    setImg(data);
  }, []);

  const makeId = () => {
    return Math.random().toString(36).substring(2, 16);
  };

  const onSubmit = () => {
    if (!user) return;
    if (title.value === "") return alert("제목을 입력해주세요");
    if (tags.arr.length === 0) return alert("하나 이상의 태그를 달아주세요");
    if (materials.arr.length === 0) {
      return alert("재료는 한가지 이상을 적으셔야 합니다");
    }
    if (recipeList.arr.length === 0) {
      return alert("하나 이상의 레시피를 적어주세요!");
    }
    if (content.value === "") return alert("소개를 적어주세요.");

    const recipe: IRecipe = {
      uuid: makeId(),
      id: user.email,
      title: title.value,
      material: materials.arr,
      imgUrl: img,
      recipe: recipeList.arr,
      tag: tags.arr,
      url: link.value,
      content: content.value,
      date: new Date().getTime(),
    };
    updateRecipe.mutate(
      { recipe },
      { onSuccess: () => alert("레시피가 등록됬습니다.") }
    );
  };

  return (
    <div className="w-screen h-screen bg-black4 fixed z-10 top-0 left-0 flex-center">
      <div
        className="w-full h-full absolute top-0 left-0 cursor-pointer"
        onClick={() => setOnAdd(false)}
      ></div>
      <div className="z-10 w-96 overflow-y-auto bg-white max-h-max70 md:rounded md:p-3">
        <AddImgFile addImg={addImg} />
        <AddTitleComponent title="제목" input={title} />
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
      {updateRecipe.isLoading && <Loading />}
    </div>
  );
};

export default AddRecipe;
