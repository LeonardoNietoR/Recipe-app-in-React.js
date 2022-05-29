import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavLinks.module.css";
import RecipeTypesMenu from "./RecipeTypesMenu";
import LinksSocialNet from "./LinksSocialNet";

const NavLinks = () => {
   const [showRecipeTypesMenu, setShowRecipeTypesMenu] = useState(false);

   const showRecipesMenuHandler = () => {
      setShowRecipeTypesMenu(true);
   };

   const hideRecipesMenuHandler = () => {
      setShowRecipeTypesMenu(false);
   };

   const toggleRecipesMenuHandler = () => {
      setShowRecipeTypesMenu((prev) => !prev);
   };

   return (
      <nav className={classes.nav}>
         <ul className={classes.nav_ul}>
            <li className={classes.nav_li}>
               <Link className={classes.nav_a} to="/home">
                  Home
               </Link>
            </li>
            <li
               className={classes.nav_li}
               onMouseEnter={showRecipesMenuHandler}
               onMouseLeave={hideRecipesMenuHandler}
            >
               <a
                  href="#"
                  className={classes.nav_a}
                  onClick={toggleRecipesMenuHandler}
               >
                  Recipes
               </a>
               <RecipeTypesMenu
                  onClick={hideRecipesMenuHandler}
                  showMenu={showRecipeTypesMenu ? true : false}
               />
            </li>
            <li className={classes.nav_li}>
               <a href="#" className={classes.nav_a}>
                  Bookmarks
               </a>
            </li>
            <li className={classes.nav_li}>
               <a href="#" className={classes.nav_a}>
                  Contact
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default NavLinks;
