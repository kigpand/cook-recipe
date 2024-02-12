import React from "react";
import useRecipe from "../store/recipe";
import useUser from "../store/user";
import { useInput } from "../hook/userInput";
import { login, logout } from "../api/firebase";
import { useAxios } from "../hook/useAxios";

const Header = () => {
  const searchInput = useInput("");
  const { user, setUser } = useUser();
  const { axiosInstance } = useAxios();
  const { setOnAdd, isMy, changeIsMy, setSearch, search } = useRecipe();

  const onMyRecipe = () => {
    if (!user) return;
    setSearch("");
    if (isMy) {
      changeIsMy(false);
      return;
    }
    changeIsMy(true);
  };

  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setSearch(searchInput.value);
      changeIsMy(false);
      searchInput.onClear();
    }
  };

  const onLogin = () => {
    setSearch("");
    login((data: any) => setUser(data));
  };

  const onLogout = () => {
    changeIsMy(false);
    setSearch("");
    setUser(null);
    logout();
  };

  const onReload = () => {
    changeIsMy(false);
    setSearch("");
    searchInput.onClear();
  };

  async function onTest(category: any) {
    await axiosInstance
      .post(`http://localhost:3010/category`, {
        category: category,
      })
      .then((data) => console.log(data));
  }

  return (
    <div className=" w-full h-14 shadow flex items-center justify-center bg-white text-sm font-bold">
      <div onClick={() => onTest(1)}>test</div>
      <div className=" flex items-center">
        <input
          type="text"
          className="w-52 h-7 outline-none border border-solid border-slate-200 hover:text-gray-600 rounded-md"
          placeholder="search"
          onKeyPress={onSearch}
          value={searchInput.value}
          onChange={searchInput.onChange}
        ></input>
        {(isMy || search !== "") && (
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
