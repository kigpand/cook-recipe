import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

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

const SliderComponent = styled(Slider)`
  position: relative;
  width: 600px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 600px;
    height: 450px;
  }

  @media (max-width: 767px) {
    width: 80%;
    height: 300px;

    img {
      width: 400px;
      height: 300px;
    }
  }
`;

const ImgSlider = ({ imgs, onClearItem }: IImgSlider) => {
  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClick}>
      <div className="modal-back" onClick={onClearItem}></div>
      <SliderComponent {...setting}>
        {imgs.map((item: string, i: number) => {
          return <img src={item} key={i} alt={item}></img>;
        })}
      </SliderComponent>
    </div>
  );
};

export default ImgSlider;
