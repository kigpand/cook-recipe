import { useCallback, useState } from "react";

export const useInput = (
  initialState: string,
  validator?: (value: string) => boolean
) => {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (validator === undefined) {
      setValue(value);
    } else {
      const willdata = validator(value);
      if (willdata) {
        setValue(value);
      }
    }
  }, []);

  const onClear = useCallback(() => {
    setValue("");
  }, []);

  return { value, onChange, onClear };
};
