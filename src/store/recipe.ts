import { create } from "zustand";
import { IRecipe } from "../interface/IRecipe";

interface IRecipeStore {
  onAdd: boolean;
  isMy: boolean;
  search: string;
  setOnAdd: (flag: boolean) => void;
  changeIsMy: (flag: boolean) => void;
  setSearch: (text: string) => void;
}

const useRecipe = create<IRecipeStore>((set) => ({
  onAdd: false,
  isMy: false,
  search: "",
  setOnAdd: (flag: boolean) => set({ onAdd: flag }),
  changeIsMy: (flag: boolean) => set({ isMy: flag }),
  setSearch: (text: string) => set({ search: text }),
}));

export default useRecipe;
