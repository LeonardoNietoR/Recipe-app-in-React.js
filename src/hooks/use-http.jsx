import { useCallback, useReducer } from "react";

// const APP_KEY = process.env.REACT_APP_API_KEY.slice(0, -1);
// Temporary email: hiriye6725@ovout.com Peo654321
const APP_KEY_TEMP = "ea566ca2a41a4916b7da6de17a62b4f0";

const initialState = {
   recipesData: null,
   error: null,
   noResultsFound: false,
   status: "pending",
};

const httpReducer = (state, action) => {
   if (action.type === "STORAGE") {
      return {
         recipesData: action.dataRecipes,
         error: null,
         noResultsFound: false,
         status: "completed",
      };
   }

   if (action.type === "SUCCESS") {
      const recipesArray = action.dataRecipes.recipes
         ? action.dataRecipes.recipes
         : action.dataRecipes.results;

      if (recipesArray.length > 0) {
         const dataRecipesFiltered = recipesArray.reduce((acc, recipe) => {
            recipe.image !== undefined &&
               acc.push({
                  id: recipe.id,
                  title: recipe.title,
                  image: recipe.image,
                  summary: recipe.summary,
                  likes: recipe.aggregateLikes,
                  time: recipe.readyInMinutes,
                  servings: recipe.servings,
                  ingredients: recipe.extendedIngredients,
                  instructions: recipe.analyzedInstructions,
                  nutrition: recipe.nutrition.nutrients,
                  diet: recipe.diets,
                  cuisines: recipe.cuisines,
                  source: recipe.sourceUrl,
                  bookmark: false,
               });
            return acc;
         }, []);

         // localStorage.setItem(
         //    action.locStorage,
         //    JSON.stringify(dataRecipesFiltered)
         // );
         sessionStorage.setItem(
            action.locStorage,
            JSON.stringify(dataRecipesFiltered)
         );

         return {
            recipesData: dataRecipesFiltered,
            error: null,
            noResultsFound: false,
            status: "completed",
         };
      }
      return {
         recipesData: null,
         error: null,
         noResultsFound: true,
         status: "completed",
      };
   }

   if (action.type === "SEND") {
      return {
         recipesData: null,
         error: null,
         noResultsFound: false,
         status: "pending",
      };
   }

   if (action.type === "ERROR") {
      return {
         recipesData: null,
         error: action.errorMessage,
         noResultsFound: false,
         status: "completed",
      };
   }

   return state;
};

const useHttp = () => {
   const [httpState, dispatch] = useReducer(httpReducer, initialState);

   const httpRequest = useCallback(async (requestConfig) => {
      // const locStorage = localStorage.getItem(`${requestConfig.locStorage}`);
      const locStorage = sessionStorage.getItem(`${requestConfig.locStorage}`);

      if (locStorage) {
         dispatch({
            type: "STORAGE",
            dataRecipes: JSON.parse(locStorage),
            locStorage: requestConfig.locStorage,
         });
      } else {
         try {
            dispatch({ type: "SEND" });

            const response = await fetch(
               `${requestConfig.url}&apiKey=${APP_KEY_TEMP}`
            );
            console.log(response);
            if (!response.ok) {
               throw new Error(`Failed request. Error ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            dispatch({
               type: "SUCCESS",
               dataRecipes: data,
               locStorage: requestConfig.locStorage,
            });
         } catch (err) {
            console.log("ERRRRROOOORRR:", err);
            dispatch({ type: "ERROR", errorMessage: err.message });
         }
      }
   }, []);

   return {
      httpRequest,
      ...httpState,
   };
};

export default useHttp;
