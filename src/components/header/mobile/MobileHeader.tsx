import { useCallback, useState } from "react";
import styles from "./MobileHeader.module.scss";
import ToggleHeader from "./toggleHeader/ToggleHeader";

const MobileHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onCloseToggle = useCallback(() => {
    setToggle(false);
  }, []);

  return (
    <div className={styles.mobileHeader}>
      <img
        src={`${process.env.PUBLIC_URL}/imgs/toggle.png`}
        alt="toggle"
        className={styles.toggle}
        onClick={() => setToggle(true)}
      />
      {toggle && <ToggleHeader onCloseToggle={onCloseToggle} />}
    </div>
  );
};

export default MobileHeader;
