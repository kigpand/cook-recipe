import ListItem from "../listItem/ListItem";
import ListView from "../ListView";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import { useCallback } from "react";

const Lists = () => {
  const { currentRecipe, recipes, saveRecipes, setCurrentRecipe } = useRecipe();

  const onView = useCallback((recipe: IRecipe) => {
    setCurrentRecipe(recipe);
  }, []);

  function unView() {
    if (currentRecipe) {
      const listView = document.getElementById("listView");
      if (listView) {
        listView.style.animation = "closeMotion 0.2s forwards";
        listView.addEventListener("animationend", () => {
          setCurrentRecipe(null);
        });
      }
    }
  }

  return (
    <div
      className="w-2/3 h-4/5 pt-12 grid justify-center grid-cols-5 auto-rows-gird150 gap-2.5"
      onClick={unView}
    >
      <div className="row-start-1 row-end-4 col-start-1 col-end-3 text-white shadow">
        {recipes.length === saveRecipes.length ? (
          <div className="relative w-full h-full">
            <img
              className="w-full h-full"
              src={`${process.env.PUBLIC_URL}/imgs/recipe1.jpg`}
              alt="img"
            ></img>
            <div className="absolute top-2 left-2 font-bold text-lg">
              여러분의 레시피를 등록해보세요!
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img
              className="w-full h-full"
              src={`${process.env.PUBLIC_URL}/imgs/recipe2.jpg`}
              alt="img"
            ></img>
            <div className="absolute top-2 left-2 font-bold text-lg">
              모두에게 자신의 레시피를 공유해보세요!
            </div>
          </div>
        )}
      </div>
      {recipes.map((item: IRecipe, i: number) => {
        return <ListItem key={i} item={item} onView={onView} />;
      })}
      {currentRecipe && <ListView />}
    </div>
  );
};

export default Lists;
