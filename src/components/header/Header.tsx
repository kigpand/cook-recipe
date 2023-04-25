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
    const filter = saveRecipes.filter((item: IRecipe) => item.id === user.id);
    setRecipes(filter);
    setIsMy(true);
  };

  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const filter = saveRecipes.filter((item: IRecipe) => {
        const result = item.tag.find((tag: string) => tag === search.value);
        return result ? item : false;
      });
      setIsMy(false);
      setRecipes(filter);
      search.onClear();
    }
  };

  const onLogout = () => {
    setRecipes(saveRecipes);
    logOutUser();
  };

  const onReload = () => {
    if (recipes.length === saveRecipes.length) return;
    setRecipes(saveRecipes);
    setIsMy(false);
    search.onClear();
  };

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.input}
          placeholder="search"
          onKeyPress={onSearch}
          value={search.value}
          onChange={search.onChange}
        ></input>
        {recipes.length !== saveRecipes.length && (
          <img
            src={`${process.env.PUBLIC_URL}/imgs/reload.png`}
            alt="새로고침"
            className={styles.reload}
            onClick={onReload}
          ></img>
        )}
      </div>
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
          <div className={styles.login} onClick={onLogout}>
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

export default React.memo(Header);
