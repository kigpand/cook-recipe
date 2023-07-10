import React, { useEffect, useRef, useState } from "react";
import useUser from "../store/user";
import useRecipe from "../store/recipe";
import MobileSearch from "./mobile/MobileSearch";
import { login, logout } from "../api/firebase";

interface IHeaderToggle {
  onCloseToggle: () => void;
}

const HeaderToggle = ({ onCloseToggle }: IHeaderToggle) => {
  const ref = useRef<HTMLDivElement>(null);
  const { user, setUser } = useUser();
  const { setOnAdd, changeIsMy, isMy } = useRecipe();
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

  const onLogin = () => {
    login((data: any) => setUser(data));
  };

  const onLogout = () => {
    setUser(null);
    logout();
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
    changeIsMy(!isMy);
    onCloseToggle();
  };

  return (
    <div className="absolute -top-64 left-0 w-full duration-100" ref={ref}>
      <div className="header-toggle-list" onClick={() => setSearch(true)}>
        검색
      </div>
      {user && (
        <div className="header-toggle-list" onClick={onMyRecipe}>
          {isMy ? "전체 레시피" : "내 레시피"}
        </div>
      )}
      {user && (
        <div className="header-toggle-list" onClick={onAddRecipe}>
          레시피 등록
        </div>
      )}
      {user ? (
        <div className="header-toggle-list" onClick={onLogout}>
          로그아웃
        </div>
      ) : (
        <div className="header-toggle-list" onClick={onLogin}>
          로그인
        </div>
      )}
      <img
        src={`${process.env.PUBLIC_URL}/imgs/close.png`}
        className="bg-slate-200 w-4 h-4 p-1 absolute right-0 border border-solid border-l-slate-200 border-b-slate-200"
        alt="img"
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
