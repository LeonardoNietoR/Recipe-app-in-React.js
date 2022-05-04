import React from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill, BsFillPatchCheckFill } from "react-icons/bs";

const DisplayDiet = ({ diets }) => {
   if (diets.length > 0) {
      const dietsList = diets.map((diet, i) => (
         <li key={`${diet}_${i}`}>
            <span className="check_icon">
               <BsFillPatchCheckFill />
               {/* <BsFillCheckCircleFill /> */}
            </span>
            <span>{diet}</span>
         </li>
      ));

      return <ContainerList>{dietsList}</ContainerList>;
   }
};

export default DisplayDiet;

const ContainerList = styled.ul`
   & li {
      list-style-type: none;
   }

   & .check_icon {
      color: rgb(9, 143, 58);
      font-size: 3rem;
   }
`;
