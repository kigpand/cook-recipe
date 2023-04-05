import styles from "./ImgView.module.scss";

interface IImgView {
  img: string;
  onClearItem: () => void;
}

const ImgView = ({ img, onClearItem }: IImgView) => {
  return (
    <div className={styles.imgView}>
      <div className={styles.back} onClick={onClearItem}></div>
      <img src={img} alt="img" className={styles.img} />
    </div>
  );
};

export default ImgView;
