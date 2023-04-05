import React, { useRef, useState } from "react";
import ImgView from "../imgView/ImgView";
import styles from "./AddImgFile.module.scss";

interface IAddImgFile {
  addImg: (data: string[]) => void;
}

const AddImgFile = ({ addImg }: IAddImgFile) => {
  const ref = useRef<HTMLInputElement>(null);
  const [fileArr, setFileArr] = useState<string[]>([]);
  const [currentImg, setCurrentImg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이미지 화면에 띄우기
    if (!e.target.files) return;
    setLoading(true);
    const imgArr: string[] = [];
    const length = e.target.files.length;
    for (let i = 0; i < length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[i]);
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          imgArr.push(e.target.result);
          if (i === length - 1) {
            addImg(imgArr);
            setFileArr(imgArr);
          }
        }
        setLoading(false);
      };
    }
  };

  const onChangeEvent = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const onView = (img: string) => {
    setCurrentImg(img);
  };

  const onClearItem = () => {
    setCurrentImg("");
  };

  return (
    <div className={styles.addImgFile}>
      <div className={styles.header}>이미지 등록</div>
      <div className={styles.body}>
        {loading && (
          <div className={styles.loadingContainer}>
            <div className={styles.loading}></div>
          </div>
        )}
        <img
          src="imgs/camera.png"
          alt="camera"
          className={styles.camera}
          onClick={onChangeEvent}
        ></img>
        <input
          ref={ref}
          type="file"
          multiple
          onChange={onFileChange}
          hidden
        ></input>
        <div className={styles.arr}>
          {fileArr.length > 0 &&
            fileArr.map((item: string, i: number) => {
              return (
                <img
                  src={item}
                  alt={item}
                  key={i}
                  className={styles.img}
                  onClick={() => onView(item)}
                />
              );
            })}
        </div>
      </div>
      {currentImg !== "" && (
        <ImgView img={currentImg} onClearItem={onClearItem} />
      )}
    </div>
  );
};

export default React.memo(AddImgFile);
