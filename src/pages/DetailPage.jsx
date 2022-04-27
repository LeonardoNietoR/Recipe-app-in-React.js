import { useContext } from "react";
import classes from "./DetailPage.module.css";
import RecipeContext from "../store/recipe-context";

const DetailPage = () => {
   const { recipeSelected } = useContext(RecipeContext);

   console.log(recipeSelected);
   return <section>Hello from detail page</section>;
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
