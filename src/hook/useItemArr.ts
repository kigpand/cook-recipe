import { useCallback, useState } from "react";

export const useItemArr = (initialState: string[]) => {
  const [arr, setArr] = useState<string[]>(initialState);

  const onAdd = useCallback(
    (data: string) => {
      setArr([...arr, data]);
    },
    [arr]
  );

  const onRemove = useCallback(
    (data: string) => {
      const result = arr.filter((item: string) => item !== data);
      setArr(result);
    },
    [arr]
  );

  return { arr, onAdd, onRemove };
};
