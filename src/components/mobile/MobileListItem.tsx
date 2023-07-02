import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";

interface IMobileListItem {
  item: IRecipe;
}

const MobileListItem = ({ item }: IMobileListItem) => {
  const { setCurrentRecipe } = useRecipe();

  function onView(recipe: IRecipe) {
    setCurrentRecipe(recipe);
  }

  return (
    <div
      className="w-full h-32 flex items-center justify-center border border-solid border-b-gray-400"
      onClick={() => onView(item)}
    >
      <img
        src={item.imgUrl[0] || "imgs/noimg.png"}
        className="w-24 h-24 rounded-lg"
        alt="view"
      />
      <div className="ml-3 w-48">
        <div className="font-semibold">{item.name}</div>
        <div className="mt-1 text-[14px]">{item.content}</div>
      </div>
    </div>
  );
};

export default MobileListItem;
