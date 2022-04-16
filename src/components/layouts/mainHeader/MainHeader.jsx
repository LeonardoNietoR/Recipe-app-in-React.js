import React from "react";
import classes from "./MainHeader.module.css";
import NavLinks from "./NavLinks";
import LinksSocialNet from "./LinksSocialNet";
import InputSearch from "./InputSearch";

const MainHeader = () => {
   return (
      <header className={classes.header}>
         <div className={classes.upperBlock}>
            <div className={classes.container_logoBrand}>
               <span>cook&food</span>
            </div>
            <NavLinks />
            <LinksSocialNet />
         </div>
         <InputSearch />
      </header>
   );
};

export default MainHeader;
