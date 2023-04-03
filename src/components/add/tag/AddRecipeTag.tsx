import React, { useRef } from "react";
import { useInput } from "../../../hook/userInput";
import AddLayout from "../../common/addLayout/AddLayout";
import styles from "./AddRecipeTag.module.scss";

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
    onAddTag(input.value);
    input.onClear();
  };

  const onRemove = (data: string) => {
    removeTag(data);
  };

  return (
    <div className={styles.addRecipeTag}>
      <div className={styles.body}>
        <AddLayout title="태그 등록" input={input} onAdd={onAdd} />
        <div className={styles.container} ref={containerRef}>
          {tags.map((item: string, i: number) => {
            return (
              <div
                className={styles.child}
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
