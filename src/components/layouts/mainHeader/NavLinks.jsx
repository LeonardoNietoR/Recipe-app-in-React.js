import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks = () => {
   return (
      <nav className={classes.nav}>
         <ul>
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <a href="#">Recipes</a>
            </li>
            <li>
               <a href="#">Bookmarks</a>
            </li>
            <li>
               <a href="#">Contact</a>
            </li>
         </ul>
      </nav>
   );
};

export default NavLinks;
