import { useEffect, useState } from "react";
import styles from "./AddRecipe.module.scss";
import AddImgFile from "./imgFile/AddImgFile";

const AddRecipe = () => {
  const [img, setImg] = useState<string[]>([]);

  function addImg(data: string[]) {
    setImg(data);
  }

  return (
    <div className={styles.addRecipe}>
      <div className={styles.container}>
        <div className={styles.header}>게시글 작성</div>
        <AddImgFile addImg={addImg} />
      </div>
    </div>
  );
};

export default AddRecipe;
