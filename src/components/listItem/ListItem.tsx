import React, { useState } from "react";
import { IRecipe } from "../../interface/IRecipe";

interface IListItem {
  item: IRecipe;
  onView: (recipe: IRecipe) => void;
}

const ListItem = ({ item, onView }: IListItem) => {
  const [back, setBack] = useState<boolean>(false);

  return (
    <div
      className="text-sm text-white duration-75 relative"
      onClick={() => onView(item)}
      onMouseOver={() => setBack(true)}
      onMouseLeave={() => setBack(false)}
    >
      <img
        src={item.imgUrl[0] || "imgs/noimg.png"}
        className="w-full h-full"
        alt="view"
      />
      {back && (
        <div className="font-bold absolute top-0 left-0 w-full h-full z-10 text-white flex items-center justify-center bg-black4">
          {item.name}
        </div>
      )}
    </div>
  );
};

export default React.memo(ListItem);
