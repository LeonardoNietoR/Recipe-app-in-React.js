import { useState } from "react";
import RecipeContext from "./recipe-context";

const RecipeProvider = ({ children }) => {
   const [searchValue, setSearchValue] = useState();
   const [selectedRecipe, setSelectedRecipe] = useState();

   const updateSearchValueHandler = (value) => {
      setSearchValue(value);
   };

   const updateRecipeSelectedHandler = (recipe) => {
      setSelectedRecipe(recipe);
   };

   const recipeContext = {
      searchValue: searchValue,
      updateSearchValue: updateSearchValueHandler,
      recipeSelected: selectedRecipe,
      updateRecipeSelected: updateRecipeSelectedHandler,
   };

   return (
      <RecipeContext.Provider value={recipeContext}>
         {children}
      </RecipeContext.Provider>
   );
};

export default RecipeProvider;
