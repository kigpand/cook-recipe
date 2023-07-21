import React, { useState } from "react";
import { IRecipe } from "../interface/IRecipe";
import ListView from "./ListView";

interface IListItem {
  item: IRecipe;
}

const ListItem = ({ item }: IListItem) => {
  const [back, setBack] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);

  return (
    <div
      className="text-sm text-white duration-75 relative"
      onClick={() => setIsView(true)}
      onMouseOver={() => setBack(true)}
      onMouseLeave={() => setBack(false)}
    >
      <img
        src={(item.imgUrl && item.imgUrl[0]) || "imgs/noimg.png"}
        className="w-full h-full"
        alt="view"
      />
      {back && (
        <div className="font-bold absolute top-0 left-0 w-full h-full z-10 text-white flex items-center justify-center bg-black4 cursor-pointer animate-list-anim">
          {item.title}
        </div>
      )}
      {isView && (
        <ListView recipe={item} onCloseView={() => setIsView(false)} />
      )}
    </div>
  );
};

export default React.memo(ListItem);
