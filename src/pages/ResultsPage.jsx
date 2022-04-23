import { useEffect, useContext, useState } from "react";
import useHttp from "../hooks/use-http";
import RecipeContext from "../store/recipe-context";

const ResultsPage = () => {
   const { httpRequest, error } = useHttp();
   const [recipesData, setRecipesData] = useState();
   const { searchValue } = useContext(RecipeContext);

   console.log(recipesData);

   useEffect(() => {
      const transformData = ({ results }) => {
         console.log(results);
         if (results && results.length > 0) {
            console.log("there are items in the array");
            const dataRec = results.reduce((acc, recipe) => {
               recipe.image !== undefined &&
                  acc.push({
                     id: recipe.id,
                     title: recipe.title,
                     image: recipe.image,
                     likes: recipe.aggregateLikes,
                     time: recipe.readyInMinutes,
                  });

               return acc;
            }, []);

            setRecipesData(dataRec);
         } else {
            console.log("no results found");
         }
      };
      if (searchValue && searchValue.trim() !== "") {
         httpRequest(
            {
               url: `https://api.spoonacular.com/reipes/complexSearch?query=${searchValue}&addRecipeInformation=true&number=10`,
               // url: `https://api.spoonacular.com/recipes/autocomplete?number=10&query=${searchWord}`,
               // url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true`,
            },
            transformData
         );
         console.log(searchValue);
      }
   }, [httpRequest, searchValue]);

   let message;
   if (error) {
      console.log("we found an eerrrrorrrrrr pa");
      message = <p>{error}</p>;
   }

   return <section>{/* <div>{recipesData}</div> */}</section>;
};

export default ResultsPage;
