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
   // console.log(nutrition);

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
            return "bold";
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
      <ContainerNutrition>
         <ul>{displayNutrition}</ul>
      </ContainerNutrition>
   );
};

export default DisplayNutrition;

const ContainerNutrition = styled.div`
   border: 1.5px solid #888;

   & li {
      width: 100%
      list-style-type: none;
      display:grid;
      grid-template-columns: 50% 30% 20%;
   }
   & li span {
      // border-bottom: 1px solid #999;
      // border-top: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
      padding: .1rem .6rem;
   }

   & li span:not(:nth-of-type(1)){
      font-size: 1.9rem;
      text-align: right;
      border-left: 1px solid #ccc;
   }

   & span.bold{
      font-weight: 700;
      color: #333;
   }
`;
