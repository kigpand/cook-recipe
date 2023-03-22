import { useEffect, useState } from "react";
import ListItem from "../listItem/ListItem";
import ListView from "../listView/ListView";
import styles from "./Lists.module.scss";

const Lists = () => {
  const [view, setView] = useState<boolean>(false);
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  function onView() {
    setView(true);
  }

  function unView() {
    if (view) {
      const listView = document.getElementById("listView");
      if (listView) {
        listView.style.animation = "closeMotion 0.2s forwards";
        listView.addEventListener("animationend", () => {
          setView(false);
        });
      }
    }
  }

  return (
    <div className={styles.lists} onClick={unView}>
      <div className={styles.main}>여러분의 레시피를 등록해보세요!</div>
      {dummy.map((item: number) => {
        return <ListItem key={item} item={item} onView={onView} />;
      })}
      {view && <ListView />}
    </div>
  );
};

export default Lists;
