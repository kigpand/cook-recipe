import { useState } from "react";
import { IRecipe } from "../../interface/IRecipe";
import ListView from "../ListView";

interface IMobileListItem {
  item: IRecipe;
}

const MobileListItem = ({ item }: IMobileListItem) => {
  const [isView, setIsView] = useState<boolean>(false);
  return (
    <div
      className="w-full h-32 flex items-center justify-center border border-solid border-b-gray-400"
      onClick={() => setIsView(true)}
    >
      <img
        src={(item.imgUrl && item.imgUrl[0]) || "imgs/noimg.png"}
        className="w-24 h-24 rounded-lg"
        alt="view"
      />
      <div className="ml-3 w-48">
        <div className="font-semibold">{item.title}</div>
        <div className="mt-1 text-[14px]">{item.content}</div>
      </div>
      {isView && (
        <ListView recipe={item} onCloseView={() => setIsView(false)} />
      )}
    </div>
  );
};

export default MobileListItem;
