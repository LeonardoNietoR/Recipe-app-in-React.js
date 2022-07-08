import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavLinks.module.css";
import RecipesDropdownMenu from "./RecipesDropdownMenu";
import BookmarkDropdownMenu from "./BookmarkDropdownMenu";

const NavLinks = () => {
   const [showRecipeTypesMenu, setShowRecipeTypesMenu] = useState(false);
   const [showBookmark, setShowBookmark] = useState(false);

   const showDropdown = (anchorName) => {
      anchorName === "list-menus" && setShowRecipeTypesMenu(true);
      anchorName === "bookmarks" && setShowBookmark(true);
   };

   const hideDropdown = (anchorName) => {
      anchorName === "list-menus" && setShowRecipeTypesMenu(false);
      anchorName === "bookmarks" && setShowBookmark(false);
   };

   const toggleDropdown = (anchorName) => {
      anchorName === "list-menus" && setShowRecipeTypesMenu((prev) => !prev);
      anchorName === "bookmarks" && setShowBookmark((prev) => !prev);
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
               onMouseEnter={showDropdown.bind(null, "list-menus")}
               onMouseLeave={hideDropdown.bind(null, "list-menus")}
            >
               <a
                  href="#"
                  className={classes.nav_a}
                  onClick={toggleDropdown.bind(null, "list-menus")}
               >
                  Recipes
               </a>
               <RecipesDropdownMenu
                  onClick={hideDropdown.bind(null, "list-menus")}
                  showMenu={showRecipeTypesMenu || false}
               />
            </li>
            <li
               className={classes.nav_li}
               onMouseEnter={showDropdown.bind(null, "bookmarks")}
               onMouseLeave={hideDropdown.bind(null, "bookmarks")}
            >
               <a
                  href="#"
                  className={classes.nav_a}
                  onClick={toggleDropdown.bind(null, "bookmarks")}
               >
                  Bookmarks
               </a>
               <BookmarkDropdownMenu
                  onClick={hideDropdown.bind(null, "bookmarks")}
                  showBookmark={showBookmark || false}
               />
            </li>
            <li className={classes.nav_li}>
               <a href="#contact" className={classes.nav_a}>
                  Contact
               </a>
            </li>
         </ul>
      </nav>
   );
};

export default NavLinks;
