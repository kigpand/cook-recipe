import { useRef, useState } from "react";
import { useInput } from "../../../hook/userInput";
import styles from "./AddRecipeTag.module.scss";

interface IAddRecipeTag {
  onAddTag: (data: string) => void;
  removeTag: (data: string) => void;
}

const AddRecipeTag = ({ onAddTag, removeTag }: IAddRecipeTag) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const input = useInput("");
  const [child, setChild] = useState<string[]>([]);

  const onAdd = () => {
    if (child.length > 2) return alert("3개 이상은 등록이 불가능 합니다");
    if (!containerRef.current) return;
    onAddTag(input.value);
    setChild([...child, input.value]);
  };

  const onRemove = (data: string) => {
    removeTag(data);
    const result = child.filter((item: string) => item !== data);
    setChild(result);
  };

  return (
    <div className={styles.addRecipeTag}>
      <div className={styles.title}>태그</div>
      <div className={styles.body}>
        <input type="text" className={styles.input} {...input} />
        <div className={styles.addBtn} onClick={onAdd}>
          등록
        </div>
        <div className={styles.container} ref={containerRef}>
          {child.map((item: string, i: number) => {
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

export default AddRecipeTag;
