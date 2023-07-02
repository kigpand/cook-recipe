import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import MobileListItem from "./MobileListItem";
import ListView from "../ListView";

const MobileLists = () => {
  const { recipes, currentRecipe } = useRecipe();

  return (
    <div className="w-full h-full">
      <div className="font-bold pt-5 pl-5 mb-8 underline">
        여러분만의 레시피를 등록해보세요!
      </div>
      {recipes.map((item: IRecipe, i: number) => {
        return <MobileListItem key={i} item={item} />;
      })}
      {currentRecipe && <ListView />}
    </div>
  );
};

export default MobileLists;
