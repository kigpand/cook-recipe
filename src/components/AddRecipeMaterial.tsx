import React from "react";
import { useInput } from "../hook/userInput";
import AddLayout from "./AddLayout";

interface IAddRecipeMaterial {
  materials: string[];
  onAddMaterials: (data: string) => void;
  removeMaterials: (data: string) => void;
}

const AddRecipeMaterial = ({
  materials,
  onAddMaterials,
  removeMaterials,
}: IAddRecipeMaterial) => {
  const input = useInput("");

  const onAdd = () => {
    if (input.value.trim() === "") return alert("재료를 입력해 주세요");
    onAddMaterials(input.value);
    input.onClear();
  };

  const onRemove = (data: string) => {
    removeMaterials(data);
  };

  return (
    <div className="py-4 px-2">
      <AddLayout title="재료 등록" input={input} onAdd={onAdd} />
      <div className="mt-3 grid grid-cols-repeat-2fr text-sm gap-y-1">
        {materials.map((item: string, i: number) => {
          return (
            <div className="relative flex items-center" key={i}>
              <div className="w-36 overflow-hidden whitespace-nowrap text-ellipsis">
                {item}
              </div>
              <div
                className="text-xs absolute right-3 cursor-pointer"
                onClick={() => onRemove(item)}
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

export default React.memo(AddRecipeMaterial);
