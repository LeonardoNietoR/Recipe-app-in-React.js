import React from "react";

const RecipeContext = React.createContext({
   searchValue: "",
   updateSearchValue: () => {},
   recipeSelected: {},
   updateRecipeSelected: ()=>{}

});

export default RecipeContext;
