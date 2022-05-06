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
   max-width: 40rem;
   margin: 2rem auto;

   & li {
      margin-bottom: 0.4rem;
      list-style-type: none;
      // border: 1px solid #000;
      display: flex;
      align-items: center;
   }

   & .check_icon {
      width: 3.2rem;
      height: 3.2rem;
      margin: 0 0.6rem 0 0;
      display: inline-block;
      color: rgb(9, 143, 58);
      font-size: 3rem;
      // border: 1px solid red;
   }

   & span:nth-of-type(2) {
      // border: 1px solid green;
   }
`;
