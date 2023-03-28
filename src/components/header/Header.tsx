import useUser from "../../store/user";
import styles from "./Header.module.scss";

const Header = () => {
  const { user, logOutUser, onLogin } = useUser();
  return (
    <div className={styles.header}>
      <input
        type="text"
        className={styles.input}
        placeholder="...search"
      ></input>
      <div className={styles.btns}>
        <div className={styles.add}>게시글 등록</div>
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
