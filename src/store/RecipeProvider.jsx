import { useState, useReducer } from "react";
import RecipeContext from "./recipe-context";

const initialStateBookmark = [];

const bookmarkReducer = (state, action) => {
   if (action.type === "ADD") {
      console.log("add");
      return [...state, action.recipeData];
   }

   if (action.type === "REMOVE") {
      console.log("remove");

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
