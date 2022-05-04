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
   display: flex;
   & li {
      color: var(--color-paragraph-1);
      background-color: var(--color-brand-orange);
      list-style-type: none;
      padding: 0.5rem 0.9rem;
      margin-right: 0.7rem;
      border-radius: 6px;
      border: 1px solid #999;
   }
`;
