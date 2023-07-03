import React, { useRef } from "react";
import { useInput } from "../hook/userInput";
import AddLayout from "./AddLayout";

interface IAddRecipeTag {
  tags: string[];
  onAddTag: (data: string) => void;
  removeTag: (data: string) => void;
}

const AddRecipeTag = ({ tags, onAddTag, removeTag }: IAddRecipeTag) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const input = useInput("");

  const onAdd = () => {
    if (tags.length > 2) return alert("3개 이상은 등록이 불가능 합니다");
    if (!containerRef.current) return;
    if (input.value.trim() === "") return alert("태그를 입력해 주세요");
    onAddTag(input.value);
    input.onClear();
  };

  const onRemove = (data: string) => {
    removeTag(data);
  };

  return (
    <div className="py-4 px-2 border border-solid border-b-slate-400">
      <div className="flex items-center">
        <AddLayout title="태그 등록" input={input} onAdd={onAdd} />
        <div className="ml-3" ref={containerRef}>
          {tags.map((item: string, i: number) => {
            return (
              <div
                className="mt-1 text-xs font-medium text-blue-600 hover:cursor-pointer hover:underline"
                onClick={() => onRemove(item)}
                key={i}
              >
                #{item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddRecipeTag);
