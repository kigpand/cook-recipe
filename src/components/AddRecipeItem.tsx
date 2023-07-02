import React from "react";
import { useInput } from "../hook/userInput";
import AddLayout from "./common/addLayout/AddLayout";

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
    <div className="py-4 px-2 border border-solid border-b-gray-400">
      <AddLayout title="레시피 등록" input={input} onAdd={onAdd} />
      <div className="w-full relative">
        {recipes.map((item: string, i: number) => {
          return (
            <div className="my-2 mx-0 flex items-center w-9/12" key={i}>
              <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {item}
              </div>
              <div
                className="absolute right-3 text-xs cursor-pointer"
                onClick={() => removeRecipes(item)}
              >
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
