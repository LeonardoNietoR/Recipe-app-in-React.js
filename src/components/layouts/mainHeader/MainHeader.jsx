import React, { useState } from "react";
import classes from "./MainHeader.module.css";
import NavLinks from "./NavLinks";
import LinksSocialNet from "./LinksSocialNet";
import InputSearch from "./InputSearch";

const MainHeader = () => {
   return (
      <header className={classes.header}>
         <div className={classes.upperBlock}>
            <div className={classes.container_brandName}>
               <span>cook</span>
               <span>&</span>
               <span>food</span>
            </div>
            <InputSearch />
            <LinksSocialNet />
         </div>
         <div className={classes.lowerBlock}>
            <NavLinks />
         </div>
      </header>
   );
};

export default MainHeader;
