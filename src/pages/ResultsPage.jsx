import { useEffect, useContext, useState } from "react";
import classes from "./ResultsPage.module.css";
import useHttp from "../hooks/use-http";
import RecipeContext from "../store/recipe-context";
import CardContent from "../components/displayRecipes/CardContent";

const NUMBER_OF_RESULTS = 12;

// url: `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${searchWord}`,
// url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`,

const ResultsPage = () => {
   const { httpRequest, error } = useHttp();
   const [recipesData, setRecipesData] = useState([]);
   const [resultsNotFound, setResultsNotFound] = useState(false);
   const { searchValue } = useContext(RecipeContext);

   console.log(recipesData);

   useEffect(() => {
      const transformData = (dataRecipes, locStorage = false) => {
         if (locStorage) {
            console.log("if local storage");
            setRecipesData(dataRecipes);
            return;
         }

         if (!locStorage && dataRecipes && dataRecipes.results.length > 0) {
            console.log("if no local storage and there is data recipes");
            const dataRecipesFiltered = dataRecipes.results.reduce(
               (acc, recipe) => {
                  recipe.image !== undefined &&
                     acc.push({
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        summary: recipe.summary,
                        likes: recipe.aggregateLikes,
                        time: recipe.readyInMinutes,
                     });

                  return acc;
               },
               []
            );

            localStorage.setItem(
               "results-page",
               JSON.stringify(dataRecipesFiltered)
            );
            setRecipesData(dataRecipesFiltered);
            return;
         }

         setResultsNotFound(true);
      };
      // if (searchValue && searchValue.trim() !== "") {
      httpRequest(
         {
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${"pasta"}&addRecipeInformation=true&number=${NUMBER_OF_RESULTS}`,
            locStorage: "results-page",
         },
         transformData
      );
      // console.log(searchValue);
      // }
   }, [httpRequest]);

   const displayData = (
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

   if (error) displayContent = <p>{error}</p>;
   if (resultsNotFound && !error)
      displayContent = (
         <p>
            Sorry, we could not find any results for <span>{searchValue}</span>
         </p>
      );
   if (!resultsNotFound && !error) displayContent = displayData;

   return <section className={classes.section}>{displayContent}</section>;
};

export default ResultsPage;
