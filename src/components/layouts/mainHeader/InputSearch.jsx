import { useState, useContext } from "react";
import classes from "./InputSearch.module.css";
import { ImSearch } from "react-icons/im";
import RecipeContext from "../../../store/recipe-context";

const InputSearch = (props) => {
   const [inputValue, setInputValue] = useState();
   const recipeCtx = useContext(RecipeContext);

   const onChangeHandler = (e) => {
      setInputValue(e.target.value);
   };

   const searchSubmitHandler = (e) => {
      e.preventDefault();
      recipeCtx.updateSearchValue(inputValue);
   };
   return (
      <form
         onSubmit={searchSubmitHandler}
         className={`${props.className} ${classes.form}`}
      >
         <input
            className={classes.input}
            type="text"
            placeholder="Search a recipe"
            onChange={onChangeHandler}
         />
         <button className={classes.button}>
            <ImSearch />
         </button>
      </form>
   );
};

export default InputSearch;
