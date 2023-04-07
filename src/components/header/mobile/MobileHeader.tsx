import { useCallback, useState } from "react";
import styles from "./MobileHeader.module.scss";
import ToggleHeader from "./toggleHeader/ToggleHeader";
import useRecipe from "../../../store/recipe";

const MobileHeader = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { recipes, saveRecipes, setRecipes } = useRecipe();

  const onCloseToggle = useCallback(() => {
    setToggle(false);
  }, []);

  return (
    <div className={styles.mobileHeader}>
      {recipes.length !== saveRecipes.length && (
        <img
          src={`${process.env.PUBLIC_URL}/imgs/reload.png`}
          alt="reload"
          className={styles.reload}
          onClick={() => setRecipes(saveRecipes)}
        />
      )}
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
