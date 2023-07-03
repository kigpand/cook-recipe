import React, { useState } from "react";
import { IRecipe } from "../interface/IRecipe";
import useRecipe from "../store/recipe";
import useUser from "../store/user";
import { useInput } from "../hook/userInput";
import { login, logout } from "../api/firebase";

const Header = () => {
  const search = useInput("");
  const { user, logOutUser, loginUser } = useUser();
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

  const onLogin = () => {
    login((data: any) => loginUser(data));
  };

  const onLogout = () => {
    setRecipes(saveRecipes);
    logOutUser();
    logout();
  };

  const onReload = () => {
    if (recipes.length === saveRecipes.length) return;
    setRecipes(saveRecipes);
    setIsMy(false);
    search.onClear();
  };

  return (
    <div className=" w-full h-14 shadow flex items-center justify-center bg-white text-sm font-bold">
      <div className=" flex items-center">
        <input
          type="text"
          className="w-52 h-7 outline-none border border-solid border-slate-200 hover:text-gray-200 rounded-md"
          placeholder="search"
          onKeyPress={onSearch}
          value={search.value}
          onChange={search.onChange}
        ></input>
        {recipes.length !== saveRecipes.length && (
          <img
            src={`${process.env.PUBLIC_URL}/imgs/reload.png`}
            alt="새로고침"
            className="ml-3 w-5 h-5 p-0.5 border border-solid border-slate-200 cursor-pointer"
            onClick={onReload}
          ></img>
        )}
      </div>
      <div className="absolute right-10 flex">
        {user && (
          <div className="header-button mr-7" onClick={onMyRecipe}>
            {isMy ? "전체 레시피" : "내 레시피"}
          </div>
        )}
        {user && (
          <div className="header-button mr-7" onClick={() => setOnAdd(true)}>
            게시글 등록
          </div>
        )}
        {user ? (
          <div className="header-button" onClick={onLogout}>
            Logout
          </div>
        ) : (
          <div className="header-button" onClick={onLogin}>
            Login
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
