import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./InputSearch.module.css";
import { ImSearch } from "react-icons/im";
import RecipeContext from "../../../store/recipe-context";

const InputSearch = (props) => {
   const [inputValue, setInputValue] = useState("");
   const recipeCtx = useContext(RecipeContext);
   const navigate = useNavigate();

   const onChangeHandler = (e) => {
      console.log(e.target.value);
      setInputValue(e.target.value);
   };

   const searchSubmitHandler = (e) => {
      e.preventDefault();

      if (inputValue) {
         navigate("/results", { replace: false });
         recipeCtx.updateSearchValue(inputValue);
         setInputValue("");
      }
   };
   return (
      <form
         onSubmit={searchSubmitHandler}
         className={`${props.className} ${classes.form}`}
      >
         <div>
            <div className={classes.container_input}>
               <input
                  className={classes.input}
                  type="text"
                  placeholder="Search a recipe"
                  value={inputValue}
                  onChange={onChangeHandler}
               />
               <button className={classes.button}>
                  <ImSearch />
               </button>
            </div>
            <p className={classes.slogan}>
               Find thousands of recipes around the world!
            </p>
         </div>
      </form>
   );
};

export default InputSearch;
