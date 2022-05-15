import { useEffect, useContext, Fragment } from "react";
import classes from "./ResultsPage.module.css";
import useHttp from "../hooks/use-http";
import RecipeContext from "../store/recipe-context";
import CardContent from "../components/displayRecipes/CardContent";

const NUMBER_OF_RESULTS = 12;

// url: `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${searchWord}`,
// url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`,

const ResultsPage = () => {
   const { httpRequest, recipesData, error, noResultsFound, status } =
      useHttp();

   const { searchValue } = useContext(RecipeContext);

   useEffect(() => {
      if (searchValue && searchValue.trim() !== "") {
         httpRequest({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&addRecipeInformation=true&sort=popularity&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=${NUMBER_OF_RESULTS}`,

            locStorage: searchValue,
         });
      }
   }, [httpRequest, searchValue]);

   console.log(recipesData);
   console.log(searchValue);

   const displayRecipes = (
      <ul className={classes.ul}>
         {recipesData &&
            recipesData.map((recipe) => (
               <li key={recipe.id}>
                  <CardContent data={recipe} numOfCards={4} />
               </li>
            ))}
      </ul>
   );

   let displayContent;

   if (error) displayContent = <p className={classes.error_message}>{error}</p>;
   if (noResultsFound && !error)
      displayContent = (
         <p className={classes.notFound_message}>
            Sorry - we could not find any results for{" "}
            <span className={classes.search_reference}>"{searchValue}"</span>
         </p>
      );

   if (!noResultsFound && !error)
      displayContent = (
         <Fragment>
            <h2>
               Results for{" "}
               <span className={classes.search_reference}>"{searchValue}"</span>
            </h2>
            {displayRecipes}
         </Fragment>
      );

   return <section className={classes.section}>{displayContent}</section>;
};

export default ResultsPage;
