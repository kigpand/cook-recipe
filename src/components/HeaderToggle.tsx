import React, { useEffect, useRef, useState } from "react";
import useUser from "../store/user";
import useRecipe from "../store/recipe";
import MobileSearch from "./mobileSearch/MobileSearch";
import { IRecipe } from "../interface/IRecipe";

interface IHeaderToggle {
  onCloseToggle: () => void;
}

const HeaderToggle = ({ onCloseToggle }: IHeaderToggle) => {
  const ref = useRef<HTMLDivElement>(null);
  const { user, logOutUser, onLogin } = useUser();
  const { setOnAdd, setRecipes, saveRecipes } = useRecipe();
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = "0px";
    }
  }, []);

  const onClose = () => {
    if (ref.current) {
      ref.current.style.top = "-250px";
      ref.current.addEventListener("transitionend", onCloseToggle);
    }
  };

  const loginUser = () => {
    onCloseToggle();
    onLogin();
  };

  const logoutUser = () => {
    setRecipes(saveRecipes);
    onCloseToggle();
    logOutUser();
  };

  const onAddRecipe = () => {
    onCloseToggle();
    setOnAdd(true);
  };

  const onCloseSearch = () => {
    setSearch(false);
  };

  const onMyRecipe = () => {
    if (!user) return;
    const filter = saveRecipes.filter((item: IRecipe) => item.id === user.id);
    onCloseToggle();
    setRecipes(filter);
  };

  return (
    <div className="absolute -top-64 left-0 w-full duration-100" ref={ref}>
      <div className="header-toggle-list" onClick={() => setSearch(true)}>
        검색
      </div>
      {user && (
        <div className="header-toggle-list" onClick={onMyRecipe}>
          내 레시피
        </div>
      )}
      {user && (
        <div className="header-toggle-list" onClick={onAddRecipe}>
          레시피 등록
        </div>
      )}
      {user ? (
        <div className="header-toggle-list" onClick={logoutUser}>
          로그아웃
        </div>
      ) : (
        <div className="header-toggle-list" onClick={loginUser}>
          로그인
        </div>
      )}
      <img
        src={`${process.env.PUBLIC_URL}/imgs/close.png`}
        className="bg-slate-200 w-4 h-4 p-1 absolute right-0 border border-solid border-l-slate-200 border-b-slate-200"
        onClick={onClose}
      ></img>
      {search && (
        <MobileSearch
          onCloseSearch={onCloseSearch}
          onCloseToggle={onCloseToggle}
        />
      )}
    </div>
  );
};

export default HeaderToggle;