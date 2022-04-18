import { useEffect, useState } from "react";
import classes from "./SliderHomePage.module.css";
import useHttp from "../../../hooks/use-http";
import { BiTime, BiLike } from "react-icons/bi";
import {
   BsSuitHeartFill,
   BsSuitHeart,
   BsBookmark,
   BsBookmarkFill,
} from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderHomePage = (props) => {
   const [dataRecipe, setDataRecipe] = useState([]);
   const { fetchMeals } = useHttp();

   useEffect(() => {
      const transformData = (dataRecipe) => {
         console.log(dataRecipe);
         const dataRecip = dataRecipe.reduce((acc, recipe) => {
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

         localStorage.setItem("images", JSON.stringify(dataRecip));
         setDataRecipe(dataRecip);
      };

      fetchMeals(
         {
            url: "https://api.spoonacular.com/recipes/random?number=10",
            locStorage: props.locStorage,
         },
         transformData
      );
   }, [fetchMeals]);

   const defineSummaryText = (text) => {
      // regex1: match all characters until the space number 20. Shorten string
      const regex1 = /^(.+? ){21}/g;
      const filterText = text.match(regex1);
      // regex2: match all html tags inside the string to delete them.
      const regex2 = /<.+?>/g;
      const finalText = `${filterText[0].trim()}...`.replace(regex2, "");

      return finalText;
   };

   const imagesSlider = dataRecipe.map((rec, i) => (
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
