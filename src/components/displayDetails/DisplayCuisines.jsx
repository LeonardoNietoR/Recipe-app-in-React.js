import React from "react";
import styled from "styled-components";

const DisplayCuisines = ({ cuisines }) => {
   if (cuisines.length > 0) {
      const cuisinesList = cuisines.map((cuisine, i) => (
         <li key={`${cuisine}_${i}`}>{cuisine}</li>
      ));
      return <ContainerList>{cuisinesList}</ContainerList>;
   }
};

export default DisplayCuisines;

const ContainerList = styled.ul`
   max-width: 55rem;
   margin: 0 auto 3rem auto;
   display: flex;

   & li {
      color: var(--color-white);
      background-color: var(--color-grey-dark);
      list-style-type: none;
      padding: 0.5rem 0.9rem;
      margin-right: 0.7rem;
      border-radius: 6px;
      border: 1px solid #999;
   }
`;
