import React, { useRef, useState } from "react";
import ImgView from "./AddImgView";
import { uploadImg } from "../api/upload";
import Loading from "./Loading";

interface IAddImgFile {
  addImg: (data: string[]) => void;
}

const AddImgFile = ({ addImg }: IAddImgFile) => {
  const ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [imgs, setImgs] = useState<string[]>([]);
  const [currentImg, setCurrentImg] = useState<string>("");

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 이미지 화면에 띄우기
    if (!e.target.files) return;
    setLoading(true);
    const arr: string[] = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const result = await uploadImg(e.target.files[i]);
      arr.push(result);
    }
    setImgs(arr);
    addImg(arr);
    setLoading(false);
  };

  const onChangeEvent = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const onClearItem = () => {
    setCurrentImg("");
  };

  return (
    <div className="flex flex-col py-4 px-2 items-center">
      <div className="w-full relative flex items-center">
        {loading && <Loading />}
        <img
          src="imgs/camera.png"
          alt="camera"
          className="h-8 object-contain border border-solid border-gray-400 p-1 hover:cursor-pointer hover:bg-gray-300 rounded"
          onClick={onChangeEvent}
        ></img>
        <input
          ref={ref}
          type="file"
          accept="image/*"
          multiple
          onChange={onFileChange}
          hidden
        ></input>
        <div className="flex ml-7">
          {imgs.map((item: string, i: number) => {
            return (
              <img
                src={item}
                alt={item}
                key={i}
                className="mr-3 w-7 h-7 cursor-pointer"
                onClick={() => setCurrentImg(item)}
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
