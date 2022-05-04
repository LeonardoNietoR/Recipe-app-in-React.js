import { Fragment } from "react";
import classes from "./DisplayInstructions.module.css";

const DisplayInstructions = ({ instructions }) => {
   const instructionsDisplay = instructions.map((instruction) => (
      <li className={classes.li} key={instruction.number}>
         {instruction.step}
      </li>
   ));

   return <Fragment>{instructionsDisplay}</Fragment>;
};

export default DisplayInstructions;
