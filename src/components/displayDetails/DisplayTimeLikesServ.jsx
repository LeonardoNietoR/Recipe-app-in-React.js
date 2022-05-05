import React from "react";
import classes from "./DisplayTimeLikesServ.module.css";
import { BiTime, BiLike } from "react-icons/bi";
import { CgBowl } from "react-icons/cg";

const DisplayTimeLikesServ = (props) => {
   return (
      <div className={classes["container_times-likes-servings"]}>
         <div className={classes.container_items}>
            <span>
               <BiTime />
            </span>
            <span>{props.time} min</span>
            {/* <span>min</span> */}
         </div>
         <div className={classes.container_items}>
            <span>
               <CgBowl />
            </span>
            <span>{props.servings} Servings</span>
         </div>
         <div className={classes.container_items}>
            <span>
               <BiLike />
            </span>
            <span>{props.likes}</span>
         </div>
      </div>
   );
};

export default DisplayTimeLikesServ;
