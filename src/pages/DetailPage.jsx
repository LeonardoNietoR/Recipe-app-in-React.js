import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DetailPage.module.css";
import RecipeContext from "../store/recipe-context";
import DisplaySummary from "../components/displayDetails/DisplaySummary";
import DisplayDiet from "../components/displayDetails/DisplayDiet";
import DisplayCuisines from "../components/displayDetails/DisplayCuisines";
import DisplayNutrition from "../components/displayDetails/DisplayNutrition";
import DisplayIngredients from "../components/displayDetails/DisplayIngredient";
import DisplayInstructions from "../components/displayDetails/DisplayInstructions";
import DisplayTimeLikesServ from "../components/displayDetails/DisplayTimeLikesServ";

const DetailPage = () => {
   const { recipeSelected: recipe } = useContext(RecipeContext);
   const navigate = useNavigate();

   useEffect(() => {
      !recipe && navigate("/home", { replace: true });
   }, [recipe]);

   if (recipe) {
      console.log("dishType:", recipe.dishTypes);
      console.log("cuisine:", recipe.cuisines);
      console.log("diet:", recipe.diet);
      return (
         <section className={classes.container_section}>
            <div className={classes.container_image}>
               <img src={recipe.image} alt={`Image_${recipe.id}`} />
            </div>

            <div className={classes.container_description}>
               <div className={classes.container_title}>
                  <span className={classes.title}>{recipe.title}</span>
               </div>

               <DisplayTimeLikesServ
                  time={recipe.time}
                  servings={recipe.servings}
                  likes={recipe.likes}
               />

               <DisplayCuisines cuisines={recipe.cuisines} />
               <DisplaySummary textSummary={recipe.summary} />

               <div className={classes.container_ingredients}>
                  <h3>Ingredients</h3>
                  <DisplayIngredients ingredients={recipe.ingredients} />
               </div>

               {recipe.instructions.length > 0 && (
                  <div className={classes.container_instructions}>
                     <h3>Directions</h3>
                     <DisplayInstructions
                        instructions={recipe.instructions[0].steps}
                     />
                  </div>
               )}

               <div className={classes.container_nutrition}>
                  <h3>Nutrition</h3>
                  <DisplayNutrition nutrition={recipe.nutrition} />
               </div>

               <p>
                  Visit the source URL by clicking{" "}
                  <a target="_blank" href={recipe.source}>
                     HERE
                  </a>
                  .
               </p>
            </div>
            <DisplayDiet diets={recipe.diet} />
         </section>
      );
   }
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
