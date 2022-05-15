import { Fragment } from "react";
import styled from "styled-components";

const DisplayInstructions = ({ instructions }) => {
   const instructionsDisplay = instructions.map((instruction) => (
      <li key={instruction.number}>{instruction.step}</li>
   ));

   return <ContainerInstructions>{instructionsDisplay}</ContainerInstructions>;
};

export default DisplayInstructions;

const ContainerInstructions = styled.ol`
   & li {
      font-size: 2rem;
      font-family: var(--font-paragraph-1);
      color: var(--color-paragraph-1);
      margin: 0 0 0.5rem 0;
   }
`;
