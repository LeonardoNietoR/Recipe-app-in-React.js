import {useState} from "react";
import RecipeContext from "./recipe-context";

const RecipeProvider = ({children}) => {
   const [searchValue, setSearchValue] = useState()

const updateSearchValueHandler = (value)=>{
setSearchValue(value)
}

const recipeContext = {
   searchValue: searchValue,
   updateSearchValue: updateSearchValueHandler 
}

   return (
      <RecipeContext.Provider value={recipeContext}>
         {children}
      </RecipeContext.Provider>
   )
   
};

export default RecipeProvider;
