import { IRecipe } from "../interface/IRecipe";
import useRecipe from "../store/recipe";

type Props = {
  recipe: IRecipe;
  onCloseView: () => void;
};

const Tags = ({ recipe, onCloseView }: Props) => {
  const { setSearch, changeIsMy } = useRecipe();

  const onTag = (data: string) => {
    changeIsMy(false);
    setSearch(data);
    onCloseView();
  };

  return (
    <div className="text-blue-400 flex mt-2">
      {recipe!.tag.map((tag: string, i: number) => {
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
