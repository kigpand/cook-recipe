import React, { useState } from "react";
import useRecipe from "../store/recipe";
import { useWindowSize } from "../hook/useWindowSize";
import { MOBILE_SIZE } from "../util/common";
import ImgSlider from "./ImgSlider";
import Tags from "./Tags";

const ListView = () => {
  const { currentRecipe, setCurrentRecipe } = useRecipe();
  const [imgs, setImgs] = useState<string[]>([]);
  const windowSize = useWindowSize();

  const onImgView = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (!currentRecipe) return;
    if (!currentRecipe.imgUrl || currentRecipe.imgUrl.length === 0) {
      return alert("보여줄 이미지가 존재하지 않습니다.");
    }
    setImgs(currentRecipe?.imgUrl);
  };

  const onClearItem = () => {
    setImgs([]);
  };

  return (
    <div
      className="fixed h-full bg-white right-0 top-0 shadow flex flex-col p-4 pb-10 overflow-y-auto font-TheJamsil5Bold z-20 md:animate-view-motion max-md:w-full"
      id="listView"
    >
      {windowSize <= MOBILE_SIZE && (
        <img
          src={`${process.env.PUBLIC_URL}/imgs/close.png`}
          alt="close"
          className="absolute top-3 right-3 w-3 h-3"
          onClick={() => setCurrentRecipe(null)}
        ></img>
      )}
      {imgs.length > 0 && <ImgSlider imgs={imgs} onClearItem={onClearItem} />}
      <div className="text-2xl font-bold mb-3 text-center">
        {currentRecipe?.title}
      </div>
      <img
        src={
          (currentRecipe!.imgUrl && currentRecipe!.imgUrl[0]) ||
          "imgs/noimg.png"
        }
        alt="img"
        className="w-96 h-72 mb-3 text-center max-md:w-full"
        onClick={onImgView}
      />
      <Tags />
      <div className="w-96 mt-3 text-red-500 underline max-md:w-full">
        {currentRecipe?.content}
      </div>
      <div className="mt-5 flex">
        <div className="mr-5 font-bold">재료</div>
        <div className="grid grid-cols-repeat-2fr">
          {currentRecipe!.material.map((item: string, i: number) => {
            return (
              <div className="w-32 mr-5 mb-2" key={i}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 pb-2 w-96 max-md:w-full">
        <div className="font-bold mb-2">조리 방법</div>
        <div className="flex flex-col">
          {currentRecipe!.recipe.map((item: string, i: number) => {
            return (
              <div className="leading-6 text-gray-400 mb-2" key={i}>
                <b className="text-black mr-1">{i + 1}.</b>
                {item}
              </div>
            );
          })}
        </div>
      </div>
      {currentRecipe!.url !== "" && (
        <a
          href={currentRecipe!.url}
          className="mt-2 no-underline text-blue-700 pb-10 hover:underline"
          target={"_blank"}
          rel="noreferrer"
        >
          레시피 링크 바로가기
        </a>
      )}
    </div>
  );
};

export default ListView;
