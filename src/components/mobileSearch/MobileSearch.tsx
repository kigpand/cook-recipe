import { useInput } from "../../hook/userInput";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import styles from "./MobileSearch.module.scss";

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
    <div className={styles.mobileSearch}>
      <div className={styles.back} onClick={closeSearch}></div>
      <div className={styles.container}>
        <div className={styles.title}>검색</div>
        <div className={styles.body}>
          <div className={styles.text}>검색할 레시피를 입력해주세요</div>
          <input
            type="text"
            className={styles.input}
            value={input.value}
            onChange={input.onChange}
          ></input>
        </div>
        <div className={styles.btns}>
          <button className={styles.cancle} onClick={onCloseSearch}>
            취소
          </button>
          <button className={styles.search} onClick={onSearch}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
