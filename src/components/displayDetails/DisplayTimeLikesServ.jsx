import React, { useState } from "react";
import classes from "./DisplayTimeLikesServ.module.css";
import { BiTime } from "react-icons/bi";
import { RiThumbUpLine, RiThumbUpFill } from "react-icons/ri";
import { CgBowl } from "react-icons/cg";

const DisplayTimeLikesServ = (props) => {
   const [liked, setLiked] = useState(false);

   const pressLikeHandler = () => {
      setLiked((prev) => !prev);
   };

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
            <span onClick={pressLikeHandler}>
               {liked ? <RiThumbUpFill /> : <RiThumbUpLine />}
            </span>
            <span className={liked ? `${classes.pressed_like}` : ""}>
               {liked ? props.likes + 1 : props.likes}
            </span>
         </div>
      </div>
   );
};

export default DisplayTimeLikesServ;
