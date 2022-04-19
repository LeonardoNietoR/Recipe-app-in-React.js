import { useEffect, useState } from "react";
import classes from "./SliderHomePage.module.css";
import useHttp from "../../../hooks/use-http";
import SliderContent from "./SliderContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderHomePage = (props) => {
   const [dataRecipes, setDataRecipe] = useState([]);
   const { fetchMeals } = useHttp();

   useEffect(() => {
      const transformData = (dataRec, locStorage = false) => {
         if (!locStorage) {
            const recipesData = dataRec.reduce((acc, recipe) => {
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
            setDataRecipe(recipesData);
            localStorage.setItem(props.locStorage, JSON.stringify(recipesData));
         } else {
            setDataRecipe(dataRec);
         }
      };

      fetchMeals(
         {
            url: "https://api.spoonacular.com/recipes/random?number=10",
            locStorage: props.locStorage,
         },
         transformData
      );
   }, [fetchMeals]);

   const imagesSlider = dataRecipes.map((recipe) => (
      <SplideSlide key={recipe.id}>
         <SliderContent data={recipe} />
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
