import { IRecipe } from "../interface/IRecipe";
import useRecipe from "../store/recipe";

const Tags = () => {
  const { currentRecipe, saveRecipes, setRecipes, setCurrentRecipe } =
    useRecipe();

  const onTag = (data: string) => {
    const filter = saveRecipes.filter((item: IRecipe) => {
      const result = item.tag.find((tag: string) => tag === data);
      return result ? item : false;
    });
    setCurrentRecipe(null);
    setRecipes(filter);
  };

  return (
    <div className="text-blue-400 flex mt-2">
      {currentRecipe!.tag.map((tag: string, i: number) => {
        return (
          <div
            className="mr-2 cursor-pointer hover:underline max-md:pl-2"
            key={i}
            onClick={() => onTag(tag)}
          >
            #{tag}
          </div>
        );
      })}
    </div>
  );
};

export default Tags;
