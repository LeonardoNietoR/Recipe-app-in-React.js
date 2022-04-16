import React from "react";
import classes from "./NavLinks.module.css";

const NavLinks = () => {
   return (
      <nav className={classes.nav}>
         <ul>
            <li>
               <a href="#">Home</a>
            </li>
            <li>
               <a href="#">About</a>
            </li>
            <li>
               <a href="#">Recipes</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default NavLinks;
