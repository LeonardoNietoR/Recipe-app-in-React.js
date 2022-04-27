import { useState } from "react";
import RecipeContext from "./recipe-context";

const RecipeProvider = ({ children }) => {
   const [searchValue, setSearchValue] = useState();
   const [idItemSelected, setIdItemSelected] = useState();

   const updateSearchValueHandler = (value) => {
      setSearchValue(value);
   };

   const updateItemSeletedIDHandler = (id) => {
      setIdItemSelected(id);
   };

   const recipeContext = {
      searchValue: searchValue,
      updateSearchValue: updateSearchValueHandler,
      itemSelectedID: idItemSelected,
      updateItemSeletedID: updateItemSeletedIDHandler,
   };

   return (
      <RecipeContext.Provider value={recipeContext}>
         {children}
      </RecipeContext.Provider>
   );
};

export default RecipeProvider;
