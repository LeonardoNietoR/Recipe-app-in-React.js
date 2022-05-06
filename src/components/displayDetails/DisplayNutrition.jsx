import React from "react";
import styled from "styled-components";

const DisplayNutrition = ({ nutrition }) => {
   console.log(nutrition);
   const displayNutrition = nutrition.map((item) => (
      <li>
         <span>{item.name}</span>
         <span>{item.amount}</span>
         <span>{item.unit}</span>
         <span>{item.percentOfDailyNeeds}</span>
      </li>
   ));

   return (
      <ContainerNutrition>
         <ul>{displayNutrition}</ul>;
      </ContainerNutrition>
   );
};

export default DisplayNutrition;

const ContainerNutrition = styled.div`
   & ul li {
      list-style-type: none;
   }
`;
