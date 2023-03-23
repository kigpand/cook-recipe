import { create } from "zustand";
import { IRecipe } from "../interface/IRecipe";

interface IRecipeStore {
  currentRecipe: IRecipe | null;
  setCurrentRecipe: (info: any) => void;
}

const useRecipe = create<IRecipeStore>((set) => ({
  currentRecipe: null,
  setCurrentRecipe: (recipe: IRecipe) => set({ currentRecipe: recipe }),
}));

export default useRecipe;
