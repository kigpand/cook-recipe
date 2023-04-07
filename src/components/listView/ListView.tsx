import React, { useState } from "react";
import useRecipe from "../../store/recipe";
import Tags from "../common/tags/Tags";
import ImgSlider from "../imgSlider/ImgSlider";
import styles from "./ListView.module.scss";
import { useWindowSize } from "../../hook/useWindowSize";
import { MOBILE_SIZE } from "../../util/common";

const ListView = () => {
  const { currentRecipe, setCurrentRecipe } = useRecipe();
  const [imgs, setImgs] = useState<string[]>([]);
  const windowSize = useWindowSize();

  const onImgView = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (!currentRecipe) return;
    if (currentRecipe?.imgUrl.length === 0) {
      return alert("보여줄 이미지가 존재하지 않습니다.");
    }
    setImgs(currentRecipe?.imgUrl);
  };

  const onClearItem = () => {
    setImgs([]);
  };

  return (
    <div className={styles.listView} id="listView">
      {windowSize <= MOBILE_SIZE && (
        <img
          src={`${process.env.PUBLIC_URL}/imgs/close.png`}
          className={styles.closeBtn}
          onClick={() => setCurrentRecipe(null)}
        ></img>
      )}
      {imgs.length > 0 && <ImgSlider imgs={imgs} onClearItem={onClearItem} />}
      <div className={styles.title}>{currentRecipe?.name}</div>
      <img
        src={currentRecipe!.imgUrl[0]}
        alt="img"
        className={styles.img}
        onClick={onImgView}
      />
      <Tags />
      <div className={styles.content}>{currentRecipe?.content}</div>
      <div className={styles.materials}>
        <div className={styles.materialTitle}>재료</div>
        <div className={styles.items}>
          {currentRecipe!.material.map((item: string, i: number) => {
            return (
              <div className={styles.item} key={i}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.recipe}>
        <div className={styles.recipeTitle}>조리 방법</div>
        <div className={styles.recipeList}>
          {currentRecipe!.recipe.map((item: string, i: number) => {
            return (
              <div className={styles.list} key={i}>
                <b>{i + 1}.</b>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <a
        href={currentRecipe!.url}
        className={styles.url}
        target={"_blank"}
        rel="noreferrer"
      >
        레시피 링크 바로가기
      </a>
    </div>
  );
};

export default ListView;
