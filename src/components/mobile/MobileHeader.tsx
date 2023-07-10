import { useCallback, useState } from "react";
import useRecipe from "../../store/recipe";
import HeaderToggle from "../HeaderToggle";

const MobileHeader = () => {
  const { search, isMy } = useRecipe();
  const [toggle, setToggle] = useState<boolean>(false);

  const onCloseToggle = useCallback(() => {
    setToggle(false);
  }, []);

  return (
    <div className="w-full h-10 flex items-center bg-white relative shadow">
      {isMy ||
        (search !== "" && (
          <img
            src={`${process.env.PUBLIC_URL}/imgs/reload.png`}
            alt="reload"
            className="w-5 h-5 p-1 border border-solid border-slate-200 absolute left-2 rounded-s"
            onClick={() => {}}
          />
        ))}
      <img
        src={`${process.env.PUBLIC_URL}/imgs/toggle.png`}
        alt="toggle"
        className="h-5 object-contain absolute top-3 right-3 cursor-pointer"
        onClick={() => setToggle(true)}
      />
      {toggle && <HeaderToggle onCloseToggle={onCloseToggle} />}
    </div>
  );
};

export default MobileHeader;
