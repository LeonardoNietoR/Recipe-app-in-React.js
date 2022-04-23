import React from "react";

const RecipeContext = React.createContext({
   searchValue: "",
   updateSearchValue: () => {},
});

export default RecipeContext;
