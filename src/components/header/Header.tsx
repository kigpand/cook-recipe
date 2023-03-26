import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>글쓰기</div>
      <div>로그아웃</div>
    </div>
  );
};

export default Header;
