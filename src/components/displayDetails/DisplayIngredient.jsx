import { Fragment } from "react";

const DisplayIngredient = ({ ingredients }) => {
   const ingredientsDisplay = ingredients.map((ingredient, i) => (
      <li
         style={{ listStyleType: "none" }}
         key={`${ingredient.name}_${ingredient.id}_${i}`}
      >
         <span>{ingredient.amount}</span>
         <span> {ingredient.unit}</span>
         <span> {ingredient.originalName}</span>
      </li>
   ));

   return <ul>{ingredientsDisplay}</ul>;
};

export default DisplayIngredient;
