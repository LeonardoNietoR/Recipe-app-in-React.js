import { Fragment } from "react";
import classes from "./DisplayIngredient.module.css";

const DisplayIngredient = ({ ingredients }) => {
   const ingredientsDisplay = ingredients.map((ingredient) => (
      <li key={ingredient.id} className={classes.container_ingredient}>
         <span>{ingredient.amount}</span>
         <span> {ingredient.unit}</span>
         <span> {ingredient.originalName}</span>
      </li>
   ));

   return <Fragment>{ingredientsDisplay}</Fragment>;
};

export default DisplayIngredient;
