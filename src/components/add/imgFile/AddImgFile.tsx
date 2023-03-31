import React, { useRef, useState } from "react";
import styles from "./AddImgFile.module.scss";

interface IAddImgFile {
  addImg: (data: string[]) => void;
}

const AddImgFile = ({ addImg }: IAddImgFile) => {
  const ref = useRef<HTMLInputElement>(null);
  const [fileArr, setFileArr] = useState<string[]>([]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이미지 화면에 띄우기
    if (!e.target.files) return;
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
      };
    }
  };

  const onChangeEvent = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const onView = () => {
    console.log(fileArr);
  };

  return (
    <div className={styles.addImgFile}>
      <div className={styles.header}>이미지 등록</div>
      <div className={styles.body}>
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
        {/* {fileArr.length > 0 && <div onClick={onView}>미리보기</div>} */}
        <div className={styles.preView} onClick={onView}>
          미리보기
        </div>
      </div>
    </div>
  );
};

export default React.memo(AddImgFile);
