import useUser from "../../store/user";
import styles from "./Header.module.scss";

const Header = () => {
  const { user, logOutUser, onLogin } = useUser();
  return (
    <div className={styles.header}>
      <div>글쓰기</div>
      {user ? (
        <div onClick={logOutUser}>로그아웃</div>
      ) : (
        <div onClick={onLogin}>로그인</div>
      )}
    </div>
  );
};

export default Header;
