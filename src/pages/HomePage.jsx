import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../store/recipe-context";
import classes from "./HomePage.module.css";
import SliderHomePage from "../components/displayRecipes/SliderHomePage";

const slider1Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=pork&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const slider2Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=chocolate_pie&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const slider3Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=cocktail&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const HomePage = () => {
   const { updateSearchValue } = useContext(RecipeContext);
   const navigate = useNavigate();

   const searchTitleHandler = (event) => {
      updateSearchValue(event.target.dataset.title);
      navigate("/results", { replace: true });
   };

   const displaySliders = (
      <Fragment>
         <div className={classes.collection}>
            <h2 onClick={searchTitleHandler} data-title="popular">
               Popular picks
            </h2>
            <SliderHomePage
               numOfSlides={3}
               url={slider1Url}
               locStorage="pork"
               showSpinner={true}
            />
         </div>

         <div className={classes.collection}>
            <h2 onClick={searchTitleHandler} data-title="desserts">
               Desserts
            </h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider2Url}
               locStorage="desserts"
               showSpinner={false}
            />
         </div>
         <div className={classes.collection}>
            <h2 onClick={searchTitleHandler} data-title="cocktails">
               Drinks and cocktails
            </h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider3Url}
               locStorage="cocktails"
               showSpinner={false}
            />
         </div>
      </Fragment>
   );

   return <section> {displaySliders}</section>;
};

export default HomePage;
