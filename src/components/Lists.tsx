import ListItem from "./ListItem";
import { IRecipe } from "../interface/IRecipe";
import useRecipe from "../store/recipe";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getContents } from "../api/firebase";
import useUser from "../store/user";
import ListsFooter from "./ListsFooter";

const Lists = () => {
  const { user } = useUser();
  const { setCurrentRecipe, search, isMy } = useRecipe();
  const { data: recipes, refetch } = useQuery(["contents"], getContents, {
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

  const onView = useCallback((recipe: IRecipe) => {
    setCurrentRecipe(recipe);
  }, []);

  return (
    <div className="w-2/3 h-4/5 pt-12 grid justify-center grid-cols-5 auto-rows-gird150 gap-2.5">
      <div className="row-start-1 row-end-4 col-start-1 col-end-3 text-white shadow">
        <div className="relative w-full h-full">
          <img
            className="w-full h-full"
            src={
              isMy || search !== ""
                ? `${process.env.PUBLIC_URL}/imgs/recipe2.jpg`
                : `${process.env.PUBLIC_URL}/imgs/recipe1.jpg`
            }
            alt="img"
          ></img>
          <div className="absolute top-2 left-2 font-bold text-lg">
            {isMy || search !== ""
              ? "모두에게 자신의 레시피를 공유해보세요!"
              : "여러분의 레시피를 등록해보세요!"}
          </div>
        </div>
      </div>
      {arr
        ?.sort((a: IRecipe, b: IRecipe) => b.date - a.date)
        .map((item: IRecipe, i: number) => {
          return <ListItem key={i} item={item} onView={onView} />;
        })}
      <ListsFooter refetch={refetch} />
    </div>
  );
};

export default Lists;
