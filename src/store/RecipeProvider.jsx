import { useState } from "react";
import RecipeContext from "./recipe-context";

const RecipeProvider = ({ children }) => {
   const [searchValue, setSearchValue] = useState();
   const [selectedRecipe, setSelectedRecipe] = useState();
   const [listBookmark, setListBookmark] = useState([]);

   console.log(listBookmark);
   const updateSearchValueHandler = (value) => {
      setSearchValue(value);
   };

   const updateRecipeSelectedHandler = (recipe) => {
      setSelectedRecipe(recipe);
   };

   const updateBookmarkListHandler = (recipe) => {
      setListBookmark((prev) => {
         const existing_bookmark = prev.some((el) => el.id === recipe.id);

         if (!existing_bookmark) return [...prev, recipe];

         return prev;
      });
   };

   const recipeContext = {
      searchValue: searchValue,
      updateSearchValue: updateSearchValueHandler,
      recipeSelected: selectedRecipe,
      updateRecipeSelected: updateRecipeSelectedHandler,
      bookmarkList: listBookmark,
      updateBookmarkList: updateBookmarkListHandler,
   };

   return (
      <RecipeContext.Provider value={recipeContext}>
         {children}
      </RecipeContext.Provider>
   );
};

export default RecipeProvider;
