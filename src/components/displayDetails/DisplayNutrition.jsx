import React from "react";
import classes from "./DisplayNutrition.module.css";

const DisplayNutrition = ({ nutrition }) => {
   const displayNutrition = nutrition.map((item, i) => {
      const nameItem = item.name.toLowerCase();

      const nameInBold = (name) => {
         if (
            name === "calories" ||
            name === "fat" ||
            name === "carbohydrates" ||
            name === "cholesterol" ||
            name === "sodium" ||
            name === "protein"
         ) {
            return classes.bold;
         }
         return "";
      };

      return (
         <li key={`${item.name}_${i}`}>
            <span className={nameInBold(nameItem)}>{item.name}</span>
            <span>{`${Math.round(item.amount)} ${item.unit}`}</span>
            <span>{Math.round(item.percentOfDailyNeeds)}%</span>
         </li>
      );
   });

   return (
      <div className={classes.container_nutrition}>
         <ul>{displayNutrition}</ul>
      </div>
   );
};

export default DisplayNutrition;
