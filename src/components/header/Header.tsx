import React, { useState } from "react";
import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import useUser from "../../store/user";
import styles from "./Header.module.scss";
import { useInput } from "../../hook/userInput";

const Header = () => {
  const search = useInput("");
  const { user, logOutUser, onLogin } = useUser();
  const { setOnAdd, setRecipes, recipes, saveRecipes } = useRecipe();
  const [isMy, setIsMy] = useState<boolean>(false);

  const onMyRecipe = () => {
    if (!user) return;
    if (isMy) {
      setRecipes(saveRecipes);
      setIsMy(false);
      return;
    }
    const filter = recipes.filter((item: IRecipe) => item.id === user.id);
    setRecipes(filter);
    setIsMy(true);
  };

  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const filter = saveRecipes.filter((item: IRecipe) =>
        item.name.includes(search.value)
      );
      setRecipes(filter);
      setIsMy(true);
      search.onClear();
    }
  };

  return (
    <div className={styles.header}>
      <input
        type="text"
        className={styles.input}
        placeholder="...search"
        onKeyDown={onSearch}
        value={search.value}
        onChange={search.onChange}
      ></input>
      <div className={styles.btns}>
        {user && (
          <div className={styles.add} onClick={onMyRecipe}>
            {isMy ? "전체 레시피" : "내 레시피"}
          </div>
        )}
        {user && (
          <div className={styles.add} onClick={() => setOnAdd(true)}>
            게시글 등록
          </div>
        )}
        {user ? (
          <div className={styles.login} onClick={logOutUser}>
            Logout
          </div>
        ) : (
          <div className={styles.login} onClick={onLogin}>
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
