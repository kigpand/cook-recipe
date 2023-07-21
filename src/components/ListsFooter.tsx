import useRecipe from "../store/recipe";
import AddRecipe from "./AddRecipe";
import Loading from "./Loading";

interface IListsFooter {
  isLoading: boolean;
  refetch: any;
}

const ListsFooter = ({ isLoading, refetch }: IListsFooter) => {
  const { onAdd } = useRecipe();

  return (
    <div>
      {isLoading && <Loading />}
      {onAdd && <AddRecipe refetch={refetch} />}
    </div>
  );
};

export default ListsFooter;
