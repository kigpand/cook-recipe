import React from "react";
import Slider, { Settings } from "react-slick";
import styles from "./ImgSlider.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const setting: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface IImgSlider {
  imgs: string[];
  onClearItem: () => void;
}

const ImgSlider = ({ imgs, onClearItem }: IImgSlider) => {
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.imgSlider} onClick={onClick}>
      <div className={styles.back} onClick={onClearItem}></div>
      <Slider {...setting} className={styles.slider}>
        {imgs.map((item: string, i: number) => {
          return <img src={item} key={i} alt={item}></img>;
        })}
      </Slider>
    </div>
  );
};

export default ImgSlider;
