import { Fragment } from "react";
import styled from "styled-components";

const DisplayIngredient = ({ ingredients }) => {
   console.log(ingredients);
   const ingredientsDisplay = ingredients.map((ingredient, i) => (
      <li
         style={{ listStyleType: "none" }}
         key={`${ingredient.name}_${ingredient.id}_${i}`}
      >
         <span className="bold">
            {/* {ingredient.amount} */}
            {parseFloat(ingredient.amount.toFixed(1))}
         </span>
         <span className="bold"> {ingredient.unit}</span>
         <span> {ingredient.originalName}</span>
      </li>
   ));

   return <ContainerIngredients>{ingredientsDisplay}</ContainerIngredients>;
};

export default DisplayIngredient;

const ContainerIngredients = styled.ul`
   & li {
      list-style-type: "none";
   }
   & li .bold {
      font-weight: 700;
      color: #333;
   }
`;
