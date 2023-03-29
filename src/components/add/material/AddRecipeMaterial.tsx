import { useInput } from "../../../hook/userInput";
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
    onAddMaterials(input.value);
    input.onClear();
  };

  const onRemove = (data: string) => {
    removeMaterials(data);
  };

  return (
    <div className={styles.addRecipeMaterial}>
      <div className={styles.title}>재료 등록</div>
      <div className={styles.body}>
        <input
          type="text"
          className={styles.input}
          value={input.value}
          onChange={input.onChange}
        />
        <button className={styles.addBtn} onClick={onAdd}>
          등록
        </button>
      </div>
      <div className={styles.materials}>
        {materials.map((item: string, i: number) => {
          return (
            <div className={styles.item} key={i}>
              {item}
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

export default AddRecipeMaterial;
