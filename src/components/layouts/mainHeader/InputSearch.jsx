import React from "react";
import classes from "./InputSearch.module.css";
import { ImSearch } from "react-icons/im";

const InputSearch = (props) => {
   const searchSubmitHandler = (e) => {
      e.preventDefault();
      console.log("lolas");
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
         />
         <button className={classes.button}>
            <ImSearch />
         </button>
      </form>
   );
};

export default InputSearch;
