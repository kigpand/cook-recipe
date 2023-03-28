import { useEffect, useState } from "react";
import styles from "./AddRecipe.module.scss";
import AddImgFile from "./imgFile/AddImgFile";
import Input from "../common/input/Input";
import { useInput } from "../../hook/userInput";
import AddRecipeTag from "./tag/AddRecipeTag";

const AddRecipe = () => {
  const [img, setImg] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
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
        <div className={styles.title}>
          <div className={styles.text}>링크</div>
          <input type="text" className={styles.input} />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
