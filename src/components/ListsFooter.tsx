import useRecipe from "../store/recipe";
import AddRecipe from "./AddRecipe";
import ListView from "./ListView";
import Loading from "./Loading";

interface IListsFooter {
  isLoading: boolean;
  refetch: any;
}

const ListsFooter = ({ isLoading, refetch }: IListsFooter) => {
  const { currentRecipe, onAdd } = useRecipe();

  return (
    <div>
      {currentRecipe && <ListView />}
      {isLoading && <Loading />}
      {onAdd && <AddRecipe refetch={refetch} />}
    </div>
  );
};

export default ListsFooter;
