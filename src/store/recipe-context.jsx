import React from "react";

const RecipeContext = React.createContext({
   searchValue: "",
   updateSearchValue: () => {},
   itemSelectedID: '',
   updateItemSeletedID: ()=>{}

});

export default RecipeContext;
