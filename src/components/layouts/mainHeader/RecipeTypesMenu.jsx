import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RecipeTypesMenu.module.css";

import RecipeContext from "../../../store/recipe-context";

const menuOptions = {
   cuisines: [
      "American",
      "Caribbean",
      "Chinese",
      "European",
      "French",
      "Indian",
      "Italian",
      "Latin American",
      "Mediterranean",
      "Middle Eastern",
      "Thai",
   ],
   diet: [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
   ],
   "meal-type": [
      "Main course",
      "Side dish",
      "Dessert",
      "Appetizer",
      "Breakfast",
      "Soup",
      "Sauce",
      "Snack",
      "Drink",
   ],
};

const RecipeTypesMenu = (props) => {
   const { updateSearchValue } = useContext(RecipeContext);
   const navigate = useNavigate();

   const setSearchValueHandler = (e) => {
      navigate("/results", { replace: false });
      updateSearchValue(e.target.dataset.name);
      props.onClick();
   };

   const displayCuisinesList = (
      <div className={classes.container_list}>
         <h3>{Object.keys(menuOptions)[0]}</h3>

         <ul>
            {menuOptions.cuisines.map((cuisine, i) => (
               <li key={`${cuisine}_${i}`}>
                  <a
                     href="#"
                     data-name={cuisine}
                     onClick={setSearchValueHandler}
                  >
                     {cuisine}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
   const displayDietList = (
      <div className={classes.container_list}>
         <h3>{Object.keys(menuOptions)[1]}</h3>

         <ul>
            {menuOptions.diet.map((diet, i) => (
               <li key={`${diet}_${i}`}>
                  <a href="#" data-name={diet} onClick={setSearchValueHandler}>
                     {diet}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
   const displayMealTypeList = (
      <div className={classes.container_list}>
         <h3>{Object.keys(menuOptions)[2]}</h3>

         <ul>
            {menuOptions["meal-type"].map((type, i) => (
               <li key={`${type}_${i}`}>
                  <a href="#" data-name={type} onClick={setSearchValueHandler}>
                     {type}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );

   return (
      <div
         className={`${classes.container_menu} ${
            !props.showMenu && classes.hide
         }`}
      >
         {displayCuisinesList}
         {displayDietList}
         {displayMealTypeList}
      </div>
   );
};

export default RecipeTypesMenu;
