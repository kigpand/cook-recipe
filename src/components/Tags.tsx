import useRecipe from "../store/recipe";

const Tags = () => {
  const { currentRecipe, setCurrentRecipe } = useRecipe();
  const { setSearch, changeIsMy } = useRecipe();

  const onTag = (data: string) => {
    changeIsMy(false);
    setSearch(data);
    setCurrentRecipe(null);
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
