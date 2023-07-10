import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import MobileListItem from "./MobileListItem";
import ListView from "../ListView";
import { useQuery } from "@tanstack/react-query";
import { getContents } from "../../api/firebase";
import { useEffect, useState } from "react";
import useUser from "../../store/user";

const MobileLists = () => {
  const { user } = useUser();
  const { currentRecipe, isMy, search } = useRecipe();
  const { data: recipes, isLoading } = useQuery(["contents"], () =>
    getContents()
  );
  const [arr, setArr] = useState<IRecipe[]>([]);

  useEffect(() => {
    if (recipes) {
      setArr(recipes);
    }
  }, [recipes]);

  useEffect(() => {
    if (search !== "") {
      const results = recipes!.filter((item: IRecipe) => {
        const result = item.tag.find((tag: string) => tag === search);
        return result ? item : false;
      });
      if (results) {
        setArr(results);
      }
    } else {
      setArr(recipes!);
    }
  }, [search]);

  useEffect(() => {
    if (!recipes) return;
    if (isMy) {
      const result = recipes.filter((item: IRecipe) => item.id === user.email);
      if (result) setArr(result);
    } else {
      setArr(recipes);
    }
  }, [isMy]);

  return (
    <div className="w-full h-full">
      {isLoading && <div>로딩</div>}
      <div className="font-bold pt-5 pl-5 mb-8 underline">
        {isMy
          ? "모두에게 자신의 레시피를 공유해보세요!"
          : "여러분의 레시피를 등록해보세요!"}
      </div>
      {arr.map((item: IRecipe, i: number) => {
        return <MobileListItem key={i} item={item} />;
      })}
      {currentRecipe && <ListView />}
    </div>
  );
};

export default MobileLists;
