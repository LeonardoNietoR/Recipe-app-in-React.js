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
   }, [recipe, navigate]);

   if (recipe) {
      return (
         <section className={classes.container_section}>
            <div className={classes.container_description}>
               <div className={classes.container_title}>
                  <span className={classes.title}>{recipe.title}</span>
               </div>
               <DisplayCuisines cuisines={recipe.cuisines} />
               <DisplayDiet diets={recipe.diet} />
               <DisplayTimeLikesServ
                  time={recipe.time}
                  servings={recipe.servings}
                  likes={recipe.likes}
               />

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

               <p className={classes.visit_url}>
                  Visit the source URL by clicking{" "}
                  <a target="_blank" href={recipe.source}>
                     HERE
                  </a>
                  .
               </p>
            </div>
            <div className={classes.container_image}>
               <img src={recipe.image} alt={`Image_${recipe.id}`} />
               <div className={classes.container_nutrition}>
                  <h3>Nutrition</h3>
                  <div className={classes.header_table}>
                     <span></span>
                     <span>APS*</span>
                     <span>%DV*</span>
                  </div>
                  <DisplayNutrition nutrition={recipe.nutrition} />
                  <div className={classes.footer_table}>
                     <p>* Amount Per Serving (APS)</p>
                     <p>
                        * The % Daily Value (DV) tells you how much a nutrient
                        in a serving of food contributes to a daily diet. 2000
                        calories a day is used for general nutrition advice.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      );
   }
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
