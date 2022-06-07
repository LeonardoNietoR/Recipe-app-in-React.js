import React from "react";
import classes from "./HomePage.module.css";
import SliderHomePage from "../components/displayRecipes/SliderHomePage";

const slider1Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=pork&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const slider2Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=chocolate_pie&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const slider3Url =
   "https://api.spoonacular.com/recipes/complexSearch?query=cocktail&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=12&sort=popularity";

const HomePage = () => {
   return (
      <section>
         <div className={classes.collection}>
            <h2>Popular picks</h2>
            <SliderHomePage
               numOfSlides={3}
               url={slider1Url}
               locStorage="home_1"
            />
         </div>

         <div className={classes.collection}>
            <h2>Desserts</h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider2Url}
               locStorage="desserts"
            />
         </div>
         <div className={classes.collection}>
            <h2>Drinks and cocktails</h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider3Url}
               locStorage="cocktails"
            />
         </div>
         {/* <div className={classes.collection}>
            <h2>Ready in just 30 minutes!</h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider1Url}
               locStorage="images"
            />
         </div> */}
      </section>
   );
};

export default HomePage;
