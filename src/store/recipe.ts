import { create } from "zustand";
import { IRecipe } from "../interface/IRecipe";

interface IRecipeStore {
  onAdd: boolean;
  currentRecipe: IRecipe | null;
  isMy: boolean;
  search: string;
  setOnAdd: (flag: boolean) => void;
  setCurrentRecipe: (info: any) => void;
  changeIsMy: (flag: boolean) => void;
  setSearch: (text: string) => void;
}

const useRecipe = create<IRecipeStore>((set) => ({
  onAdd: false,
  currentRecipe: null,
  isMy: false,
  search: "",
  setCurrentRecipe: (recipe: IRecipe) => set({ currentRecipe: recipe }),
  setOnAdd: (flag: boolean) => set({ onAdd: flag }),
  changeIsMy: (flag: boolean) => set({ isMy: flag }),
  setSearch: (text: string) => set({ search: text }),
}));

export default useRecipe;
