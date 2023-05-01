import { useState } from "react";
import { useInput } from "../../hook/userInput";
import useUser from "../../store/user";
import JoinInput from "../common/joinInput/JoinInput";
import styles from "./Join.module.scss";
import Button from "../atoms/btn/Button";

const Join = () => {
  const id = useInput("");
  const pw = useInput("");
  const pwCheck = useInput("");
  const email = useInput("");
  const [idCheck, setIdCheck] = useState<boolean>(false);
  const { setJoin } = useUser();
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const onIdCheck = () => {
    if (id.value !== "kigpand") {
      alert("사용가능한 아이디 입니다.");
      setIdCheck(true);
    } else {
      alert("중복된 아이디입니다");
    }
  };

  const onSubmit = () => {
    if (!idCheck) return alert("아이디 중복체크를 진행해주세요.");
    if (pw.value.match(passwordRegEx) === null) {
      return alert(
        "올바른 형식이 아닙니다. 비밀번호는 문자 + 숫자의 조합으로 8자 이상 20자 아래로 입력해주세요"
      );
    }
    if (pw.value !== pwCheck.value) {
      pw.onClear();
      pwCheck.onClear();
      return alert("비밀번호가 다릅니다. 다시 입력부탁드립니다.");
    }
    if (!emailRegEx.test(email.value)) {
      return alert("올바른 형식의 이메일을 입력 부탁드립니다.");
    }
    alert("회원가입이 완료되었습니다.");
    setJoin(false);
  };

  return (
    <div className={styles.join}>
      <div className={styles.back} onClick={() => setJoin(false)}></div>
      <div className={styles.container}>
        <div className={styles.header}>회원가입</div>
        <JoinInput
          title="아이디"
          input={id}
          isPassword={false}
          onCheck={onIdCheck}
        />
        <JoinInput title="비밀번호" input={pw} isPassword={true} />
        <JoinInput title="비밀번호 체크" input={pwCheck} isPassword={true} />
        <JoinInput title="email" input={email} isPassword={false} />
        <div className={styles.btns}>
          <Button
            type="cancle"
            text="취소"
            onClick={() => setJoin(false)}
            style={{ width: "50px", height: "30px" }}
          />
          <Button
            type="add"
            text="등록"
            style={{ width: "50px", height: "30px", marginLeft: "5px" }}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Join;
