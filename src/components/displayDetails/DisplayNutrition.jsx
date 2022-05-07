import React from "react";
import styled from "styled-components";

const boldNutritionNames = [
   "calories",
   "fat",
   "carbohydrates",
   "cholesterol",
   "sodium",
   "protein",
];

const exclude = "Net Carbohydrates";

const DisplayNutrition = ({ nutrition }) => {
   console.log(nutrition);

   const displayNutrition = nutrition.map((item) => {
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
            return "bold";
         }
         return "";
      };

      return (
         <li>
            <span className={nameInBold(nameItem)}>{item.name}</span>
            <span>{`${item.amount} ${item.unit}`}</span>
            <span>{item.percentOfDailyNeeds}%</span>
         </li>
      );
   });

   return (
      <ContainerNutrition>
         <ul>{displayNutrition}</ul>
      </ContainerNutrition>
   );
};

export default DisplayNutrition;

const ContainerNutrition = styled.div`
   // border: 1px solid #333;

   & li {
      width: 100%
      list-style-type: none;
      display:grid;
      grid-template-columns: 50% 30% 20%;
   }
   & li span {
      // border-bottom: 1px solid #999;
      border: 1px solid #999;
   }

   & li span:not(:nth-of-type(1)){
      font-size: 1.9rem;
      text-align: right;
   }

   & span.bold{
      font-weight: 700;
      color: #111;
   }
`;
