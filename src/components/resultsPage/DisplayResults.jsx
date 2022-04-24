import React from "react";
import classes from "./DisplayResults.module.css";
import Card from "../UI/Card";

const DisplayResults = (props) => {
   return (
      <Card className={classes.card}>
         <a href="#">
            <div className={classes.container_image}>
               <img src={props.image} alt={`image_${props.id}`} />

               <div className={classes.filter_image}></div>
            </div>
            <span className={classes.title}>{props.title}</span>
            <span className={classes.likes}>{props.likes}</span>
            <span className={props.time}>{props.time}</span>
         </a>
      </Card>
   );
};

export default DisplayResults;
