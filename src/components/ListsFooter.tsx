import useRecipe from "../store/recipe";
import AddRecipe from "./AddRecipe";
import ListView from "./ListView";

interface IListsFooter {
  refetch: any;
}

const ListsFooter = ({ refetch }: IListsFooter) => {
  const { currentRecipe, onAdd } = useRecipe();

  return (
    <div>
      {currentRecipe && <ListView />}
      {onAdd && <AddRecipe refetch={refetch} />}
    </div>
  );
};

export default ListsFooter;
