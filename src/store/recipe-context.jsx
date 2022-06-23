import React from "react";

const RecipeContext = React.createContext({
   searchValue: "",
   updateSearchValue: () => {},
   recipeSelected: {},
   updateRecipeSelected: () => {},
   bookmarkList: [],
   updateBookmarkList: () => {},
});

export default RecipeContext;
