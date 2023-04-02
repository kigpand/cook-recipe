import { useInput } from "../../hook/userInput";
import useUser from "../../store/user";
import Input from "../common/input/Input";
import styles from "./Login.module.scss";

const Login = () => {
  const { loginUser, unLogin, setJoin } = useUser();
  const id = useInput("");
  const pw = useInput("");

  const onLogin = () => {
    loginUser({ id: id.value });
    unLogin();
  };

  const onJoin = () => {
    unLogin();
    setJoin(true);
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.header}>로그인</div>
        <Input width="80%" placeholder="아이디" onChange={id.onChange} />
        <Input width="80%" placeholder="비밀번호" onChange={pw.onChange} />
        <div className={styles.btns}>
          <button className={styles.loginBtn} onClick={onLogin}>
            로그인
          </button>
          <button className={styles.join} onClick={onJoin}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
