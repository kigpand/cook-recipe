import { create } from "zustand";
import { IRecipe } from "../interface/IRecipe";

interface IRecipeStore {
  onAdd: boolean;
  recipes: IRecipe[];
  currentRecipe: IRecipe | null;
  saveRecipes: IRecipe[];
  setOnAdd: (flag: boolean) => void;
  setRecipes: (recipe: IRecipe[]) => void;
  addRecipes: (recipe: IRecipe) => void;
  setCurrentRecipe: (info: any) => void;
  setSaveRecipes: (data: IRecipe[]) => void;
}

const useRecipe = create<IRecipeStore>((set) => ({
  onAdd: false,
  recipes: [],
  currentRecipe: null,
  saveRecipes: [],
  setCurrentRecipe: (recipe: IRecipe) => set({ currentRecipe: recipe }),
  setRecipes: (recipe: IRecipe[]) => set({ recipes: recipe }),
  addRecipes: (recipe: IRecipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  setOnAdd: (flag: boolean) => set({ onAdd: flag }),
  setSaveRecipes: (data: IRecipe[]) => set({ saveRecipes: data }),
}));

export default useRecipe;
