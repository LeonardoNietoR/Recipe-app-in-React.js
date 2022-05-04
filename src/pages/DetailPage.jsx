import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DetailPage.module.css";
import RecipeContext from "../store/recipe-context";
import DisplaySummary from "../components/displayDetails/DisplaySummary";
import DisplayIngredients from "../components/displayDetails/DisplayIngredient";
import DisplayInstructions from "../components/displayDetails/DisplayInstructions";
import { BiTime, BiLike } from "react-icons/bi";

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

               <div className={classes["container_times-likes-servings"]}>
                  <div className={classes.container_time}>
                     <span>
                        <BiTime />
                     </span>
                     <span>{recipe.time}</span>
                     <span>min</span>
                  </div>
                  <div className={classes.container_likes}>
                     <span>
                        <BiLike />
                     </span>
                     <span>{recipe.likes}</span>
                  </div>
                  <span>{recipe.servings} Servings</span>
               </div>
               <div>
                  {recipe.diet}
                  {recipe.dishTypes}
                  {recipe.cuisines}
               </div>

               <DisplaySummary textSummary={recipe.summary} />

               <ul className={classes.ingredients}>
                  <DisplayIngredients ingredients={recipe.ingredients} />
               </ul>

               {recipe.instructions.length > 0 && (
                  <ol className={classes.instructions}>
                     <DisplayInstructions
                        instructions={recipe.instructions[0].steps}
                     />
                  </ol>
               )}

               <p>
                  Visit the source URL by clicking{" "}
                  <a target="_blank" href={recipe.source}>
                     HERE
                  </a>
                  .
               </p>
            </div>
         </section>
      );
   }
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
