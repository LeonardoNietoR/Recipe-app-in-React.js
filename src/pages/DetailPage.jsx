import { useEffect } from "react";
import useHttp from "../hooks/use-http";

// options to make http request:
const one =
   "https://api.spoonacular.com/recipes/716429/information?includeNutrition=false";

const DetailPage = () => {
   // const { httpRequest } = useHttp();

   // useEffect(() => {
   //    httpRequest();
   // }, [httpRequest]);

   return <section>Hello from detail page</section>;
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
