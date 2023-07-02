import React, { useRef, useState } from "react";
import ImgView from "./AddImgView";

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
    <div className="flex flex-col border border-solid border-b-gray-400 py-4 px-2 items-center">
      <div className="w-full mb-5 font-bold">이미지 등록</div>
      <div className="w-full relative flex items-center">
        {loading && (
          <div className="w-full h-full z-50 absolute top-0 left-0 flex-center">
            <div className="w-6 h-6 rounded-full border-2 border-solid border-gray-300 border-t-gray-700 animate-spin"></div>
          </div>
        )}
        <img
          src="imgs/camera.png"
          alt="camera"
          className="h-6 object-contain border border-solid border-gray-400 p-1 hover:cursor-pointer hover:bg-gray-300"
          onClick={onChangeEvent}
        ></img>
        <input
          ref={ref}
          type="file"
          multiple
          onChange={onFileChange}
          hidden
        ></input>
        <div className="flex ml-7">
          {fileArr.length > 0 &&
            fileArr.map((item: string, i: number) => {
              return (
                <img
                  src={item}
                  alt={item}
                  key={i}
                  className="mr-3 w-7 h-7 cursor-pointer"
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
