import { useInput } from "../../hook/userInput";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";

interface IMobileSearch {
  onCloseSearch: () => void;
  onCloseToggle: () => void;
}

const MobileSearch = ({ onCloseSearch, onCloseToggle }: IMobileSearch) => {
  const input = useInput("");
  const { saveRecipes, setRecipes } = useRecipe();

  const onSearch = () => {
    const filter = saveRecipes.filter((item: IRecipe) => {
      const result = item.tag.find((tag: string) => tag === input.value);
      return result ? item : false;
    });
    setRecipes(filter);
    input.onClear();
    onCloseSearch();
    onCloseToggle();
  };

  const closeSearch = () => {
    onCloseToggle();
    onCloseSearch();
  };

  return (
    <div className="modal">
      <div className="modal-back" onClick={closeSearch}></div>
      <div className="w-full h-48 text-center bg-white relative">
        <div className="w-full bg-shadowBlue text-white h-7 flex items-center">
          검색
        </div>
        <div className="w-full">
          <div className="font-bold mt-5 bt-2">
            검색할 레시피를 입력해주세요
          </div>
          <input
            type="text"
            className="outline-none w-48 h-7 border border-solid border-gray-400 mt-5"
            value={input.value}
            onChange={input.onChange}
          ></input>
        </div>
        <div className="absolute bottom-3 flex w-full justify-center">
          <button
            className="add-button bg-shadowBlue hover:bg-blue-500"
            onClick={onCloseSearch}
          >
            취소
          </button>
          <button
            className="add-button ml-2 bg-gray-400 hover:bg-gray-600"
            onClick={onSearch}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
