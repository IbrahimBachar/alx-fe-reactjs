import create from 'zustand';

export function recipeStore() {

  const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes })
  }));
return useRecipeStore;
  
}
