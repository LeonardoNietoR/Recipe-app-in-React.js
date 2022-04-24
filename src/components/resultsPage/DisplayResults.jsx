import React from "react";
import classes from "./DisplayResults.module.css";
import Card from "../UI/Card";
import { BiTime, BiLike } from "react-icons/bi";

const DisplayResults = (props) => {
   return (
      <Card className={classes.card}>
         <a href="#">
            <div className={classes.container_image}>
               <img src={props.image} alt={`image_${props.id}`} />
               <div className={classes.filter_image}></div>
               <div className={classes.container_timeLikes}>
                  <span className={classes.time}>
                     <BiTime /> <span>{props.time} min</span>
                  </span>
                  <span className={classes.likes}>
                     <BiLike /> <span>{props.likes}</span>
                  </span>
               </div>
               <span className={classes.title}>{props.title}</span>
            </div>
         </a>
      </Card>
   );
};

export default DisplayResults;
