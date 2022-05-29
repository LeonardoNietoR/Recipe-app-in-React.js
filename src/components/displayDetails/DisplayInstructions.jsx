import styled from "styled-components";

const DisplayInstructions = ({ instructions }) => {
   const instructionsDisplay = instructions.map((instruction) => (
      <li key={instruction.number}>{instruction.step}</li>
   ));

   return <ContainerInstructions>{instructionsDisplay}</ContainerInstructions>;
};

export default DisplayInstructions;

const ContainerInstructions = styled.ol`
   list-style-type: none;
   counter-reset: lista;

   & li {
      font-size: 2rem;
      font-family: var(--font-paragraph-1);
      color: var(--color-paragraph-1);
      margin: 0 0 0.6rem 0;
      position: relative;
   }

   & li::before {
      counter-increment: lista;
      content: counter(lista) ". ";
      width: 2.8rem;
      height: 2.8rem;
      color: #222;
      font-size: 2.2rem;
      text-align: right;
      display: inline-block;
      position: absolute;
      top: -1px;
      left: -3.3rem;
      margin-right: 1rem;
   }
`;
