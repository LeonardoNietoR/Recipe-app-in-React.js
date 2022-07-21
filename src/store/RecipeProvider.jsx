import { useState, useReducer } from "react";
import RecipeContext from "./recipe-context";

const initialStateBookmark = [];

const bookmarkReducer = (state, action) => {
   if (action.type === "ADD") {
      const existingRecipe = state.some((el) => el.id === action.recipeData.id);

      if (!existingRecipe) {
         return [...state, action.recipeData];
      }
      return state;
   }

   if (action.type === "REMOVE") {
      return state.filter((el) => el.id !== action.id);
   }
};

const RecipeProvider = ({ children }) => {
   const [searchValue, setSearchValue] = useState();
   const [selectedRecipe, setSelectedRecipe] = useState();

   const [bookmarkState, dispatch] = useReducer(
      bookmarkReducer,
      initialStateBookmark
   );

   const updateSearchValueHandler = (value) => {
      setSearchValue(value);
   };

   const updateRecipeSelectedHandler = (recipe) => {
      setSelectedRecipe(recipe);
   };

   const updateBookmarkListHandler = (recipe, add) => {
      // console.log(`from the function: ${add}`);
      add && dispatch({ type: "ADD", recipeData: recipe });

      !add && dispatch({ type: "REMOVE", id: recipe });
   };

   const recipeContext = {
      searchValue: searchValue,
      updateSearchValue: updateSearchValueHandler,
      recipeSelected: selectedRecipe,
      updateRecipeSelected: updateRecipeSelectedHandler,
      bookmarkList: bookmarkState,
      updateBookmarkList: updateBookmarkListHandler,
   };

   return (
      <RecipeContext.Provider value={recipeContext}>
         {children}
      </RecipeContext.Provider>
   );
};

export default RecipeProvider;
