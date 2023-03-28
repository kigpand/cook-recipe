import { create } from "zustand";
import { IRecipe } from "../interface/IRecipe";

interface IRecipeStore {
  onAdd: boolean;
  setOnAdd: (flag: boolean) => void;
  currentRecipe: IRecipe | null;
  setCurrentRecipe: (info: any) => void;
}

const useRecipe = create<IRecipeStore>((set) => ({
  onAdd: false,
  currentRecipe: null,
  setCurrentRecipe: (recipe: IRecipe) => set({ currentRecipe: recipe }),
  setOnAdd: (flag: boolean) => set({ onAdd: flag }),
}));

export default useRecipe;
