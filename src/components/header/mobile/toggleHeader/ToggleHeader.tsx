import { useEffect, useRef, useState } from "react";
import styles from "./ToggleHeader.module.scss";
import useUser from "../../../../store/user";
import useRecipe from "../../../../store/recipe";
import MobileSearch from "../../../mobileSearch/MobileSearch";

interface IToggleHeader {
  onCloseToggle: () => void;
}

const ToggleHeader = ({ onCloseToggle }: IToggleHeader) => {
  const ref = useRef<HTMLDivElement>(null);
  const { user, logOutUser, onLogin } = useUser();
  const { setOnAdd } = useRecipe();
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.top = "0";
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

  return (
    <div className={styles.toggleHeader} ref={ref}>
      <div className={styles.list} onClick={() => setSearch(true)}>
        검색
      </div>
      {user && <div className={styles.list}>내 레시피</div>}
      {user && (
        <div className={styles.list} onClick={onAddRecipe}>
          레시피 등록
        </div>
      )}
      {user ? (
        <div className={styles.list} onClick={logoutUser}>
          로그아웃
        </div>
      ) : (
        <div className={styles.list} onClick={loginUser}>
          로그인
        </div>
      )}
      <div className={styles.close} onClick={onClose}>
        x
      </div>
      {search && (
        <MobileSearch
          onCloseSearch={onCloseSearch}
          onCloseToggle={onCloseToggle}
        />
      )}
    </div>
  );
};

export default ToggleHeader;
