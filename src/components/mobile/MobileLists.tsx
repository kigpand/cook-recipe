import { IRecipe } from "../../interface/IRecipe";
import useRecipe from "../../store/recipe";
import MobileListItem from "./MobileListItem";
import { useQuery } from "@tanstack/react-query";
import { getContents } from "../../api/firebase";
import { useEffect, useState } from "react";
import useUser from "../../store/user";
import ListsFooter from "../ListsFooter";

const MobileLists = () => {
  const { user } = useUser();
  const { isMy, search } = useRecipe();
  const { data: recipes, refetch } = useQuery(["contents"], getContents, {
    staleTime: 1000 * 60,
    suspense: true,
  });
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
      <div className="font-bold pt-5 pl-5 mb-8 underline">
        {isMy
          ? "모두에게 자신의 레시피를 공유해보세요!"
          : "여러분의 레시피를 등록해보세요!"}
      </div>
      {arr
        ?.sort((a: IRecipe, b: IRecipe) => b.date - a.date)
        .map((item: IRecipe, i: number) => {
          return <MobileListItem key={i} item={item} />;
        })}
      <ListsFooter refetch={refetch} />
    </div>
  );
};

export default MobileLists;
