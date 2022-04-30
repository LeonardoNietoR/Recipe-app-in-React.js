import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./DetailPage.module.css";
import RecipeContext from "../store/recipe-context";

const defineSummaryText = (text) => {
   // regex1: match all html tags inside the string to delete them.
   const regex1 = /<.+?>/g;
   return `${text.trim()}`.replace(regex1, "");
};

const DetailPage = () => {
   const { recipeSelected: data } = useContext(RecipeContext);
   const navigate = useNavigate();

   console.log("detailPage data:", data);

   useEffect(() => {
      !data && navigate("/home", { replace: true });
   }, [data]);

   if (data) {
      return (
         <section className={classes.container_section}>
            <div className={classes.container_image}>
               <img src={data.image} alt={`Image_${data.id}`} />
            </div>
            <div className={classes.container_description}>
               <div className={classes.container_title}>
                  <span className={classes.title}>{data.title}</span>
               </div>
               <p className={classes.summary}>
                  {defineSummaryText(data.summary)}
               </p>
            </div>
         </section>
      );
   }
};

export default DetailPage;

// STRUCTURE
// 1. dont make an http request, instead when clicked the card (in recipeSearch) that card already has all the information to display the details.
