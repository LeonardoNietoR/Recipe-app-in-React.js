import React from "react";
import classes from "./MainHeader.module.css";
import InputSearch from "./InputSearch";
import LinksSocialNet from "./LinksSocialNet";

const MainHeader = () => {
   return (
      <header className={classes.header}>
         <div className={classes.upperBlock}>
            <div className={classes.container_logoBrand}>
               <span>cook&food</span>
            </div>
            <InputSearch />
            <LinksSocialNet />
         </div>
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
      </header>
   );
};

export default MainHeader;
