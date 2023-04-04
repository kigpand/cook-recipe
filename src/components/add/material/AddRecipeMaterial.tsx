import React from "react";
import { useInput } from "../../../hook/userInput";
import AddLayout from "../../common/addLayout/AddLayout";
import styles from "./AddRecipeMaterial.module.scss";

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
    <div className={styles.addRecipeMaterial}>
      <AddLayout title="재료 등록" input={input} onAdd={onAdd} />
      <div className={styles.materials}>
        {materials.map((item: string, i: number) => {
          return (
            <div className={styles.item} key={i}>
              <div className={styles.text}>{item}</div>
              <div className={styles.close} onClick={() => onRemove(item)}>
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
