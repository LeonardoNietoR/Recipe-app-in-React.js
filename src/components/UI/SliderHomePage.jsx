import { useEffect, useState } from "react";
import classes from "./SliderHomePage.module.css";
import { BiTime, BiLike } from "react-icons/bi";
import {
   BsSuitHeartFill,
   BsSuitHeart,
   BsBookmark,
   BsBookmarkFill,
} from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const APP_KEY = process.env.REACT_APP_API_KEY.slice(0, -1);

const SliderHomePage = () => {
   const [recipeData, setRecipeData] = useState([]);

   console.log(recipeData);
   const fetchMeals = async () => {
      const storage = localStorage.getItem("images");

      if (storage) {
         setRecipeData(JSON.parse(storage));
      } else {
         try {
            const result = await fetch(
               `https://api.spoonacular.com/recipes/random?number=10&apiKey=${APP_KEY}`
            );
            const data = await result.json();

            console.log(data.recipes);
            //   need to extract : id,title, image, aggregateLikes, ready in minutes, summary
            const dataRecipe = data.recipes.reduce((acc, recipe) => {
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
            }, []);

            localStorage.setItem("images", JSON.stringify(dataRecipe));

            setRecipeData(dataRecipe);
         } catch (err) {
            console.log(err);
         }
      }
   };

   useEffect(() => {
      fetchMeals();
   }, []);

   const defineSummaryText = (text) => {
      // regex1: match all characters until the space number 20. Shorten string
      const regex1 = /^(.+? ){21}/g;
      const filterText = text.match(regex1);
      // regex2: match all html tags inside the string to delete them.
      const regex2 = /<.+?>/g;
      const finalText = `${filterText[0].trim()}...`.replace(regex2, "");

      return finalText;
   };

   const imagesSlider = recipeData.map((rec, i) => (
      <SplideSlide key={rec.id}>
         <div className={classes.container_card}>
            <div className={classes.container_img}>
               <img
                  className={classes.img}
                  src={rec.image}
                  alt={`Image ${rec.id}`}
               />
               <div className={classes.img_filter}></div>
               <div className={classes.container_timeLikes}>
                  <span className={classes.time}>
                     <BiTime /> <span>{rec.time} min</span>
                  </span>

                  <span className={classes.likes}>
                     {/* <BsSuitHeartFill /> */}
                     {/* <BsSuitHeart /> */}
                     <BiLike />
                     <span>{rec.likes}</span>
                  </span>
               </div>
            </div>
            <div className={classes.container_details}>
               <span className={classes.img_title}>{rec.title}</span>
               <p className={classes.img_summary}>
                  {defineSummaryText(rec.summary)}
               </p>
            </div>
            <span className={classes.bookmark}>
               <BsBookmark />
            </span>
         </div>
      </SplideSlide>
   ));

   const optionsSlide = {
      rewind: true,
      pagination: false,
      gap: "1.5rem",
      drag: "free",
      width: "100%",
      perPage: 3,
      wheel: true,
   };

   return (
      <div className={classes.container_slider}>
         <Splide options={optionsSlide} aria-label="My Favorite Images">
            {imagesSlider}
         </Splide>
      </div>
   );
};

export default SliderHomePage;
