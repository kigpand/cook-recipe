import { useInput } from "../../hook/userInput";
import useUser from "../../store/user";
import Button from "../atoms/btn/Button";
import Input from "../atoms/input/Input";
import styles from "./Login.module.scss";

const Login = () => {
  const { loginUser, unLogin, setJoin } = useUser();
  const id = useInput("");
  const pw = useInput("");

  const onLogin = () => {
    if (id.value === "") return alert("아이디를 입력해주세요");
    if (pw.value === "") return alert("비밀번호를 입력해주세요");
    loginUser({ id: id.value });
    unLogin();
  };

  const onJoin = () => {
    unLogin();
    setJoin(true);
  };

  return (
    <div className={styles.login}>
      <div className={styles.back} onClick={unLogin}></div>
      <div className={styles.container}>
        <div className={styles.header}>로그인</div>
        <Input
          isPassword={false}
          style={{ width: "80%" }}
          placeholder="아이디"
          onChange={id.onChange}
        />
        <Input
          isPassword={true}
          style={{ width: "80%", marginTop: "10px" }}
          placeholder="비밀번호"
          onChange={pw.onChange}
        />
        <div className={styles.btns}>
          <Button
            type="add"
            text="로그인"
            style={{ width: "80%", height: "35px" }}
            onClick={onLogin}
          />
          <Button
            type="cancle"
            text="회원가입"
            onClick={onJoin}
            style={{ width: "80%", height: "35px", marginTop: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
