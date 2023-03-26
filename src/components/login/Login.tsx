import Input from "../common/input/Input";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.header}>로그인</div>
        <Input width="80%" placeholder="아이디" />
        <Input width="80%" placeholder="비밀번호" />
        <div className={styles.btns}>
          <button className={styles.login}>로그인</button>
          <button className={styles.join}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
