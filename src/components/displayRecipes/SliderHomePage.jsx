import { useEffect, useState } from "react";
import classes from "./SliderHomePage.module.css";
import useHttp from "../../hooks/use-http";
import CardContent from "./CardContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderHomePage = (props) => {
   // const [dataRecipes, setDataRecipe] = useState([]);
   const { httpRequest } = useHttp();

   useEffect(() => {
      // const transformData = (dataRec, locStorage = false) => {
      //    if (!locStorage) {
      //       const recipesData = dataRec.recipes.reduce((acc, recipe) => {
      //          recipe.image !== undefined &&
      //             acc.push({
      //                id: recipe.id,
      //                title: recipe.title,
      //                image: recipe.image,
      //                summary: recipe.summary,
      //                likes: recipe.aggregateLikes,
      //                time: recipe.readyInMinutes,
      //             });
      //          return acc;
      //       }, []);
      //       setDataRecipe(recipesData);
      //       localStorage.setItem(props.locStorage, JSON.stringify(recipesData));
      //    } else {
      //       setDataRecipe(dataRec);
      //    }
      // };

      httpRequest({
         url: props.url,
         locStorage: props.locStorage,
      });
   }, [httpRequest]);

   // const imagesSlider = dataRecipes.map((recipe) => (
   //    <SplideSlide key={recipe.id}>
   //       <CardContent
   //          data={recipe}
   //          slider={true}
   //          numOfCards={props.numOfSlides}
   //       />
   //    </SplideSlide>
   // ));

   // const optionsSlide = {
   //    rewind: true,
   //    pagination: false,
   //    gap: "1.5rem",
   //    drag: "free",
   //    width: "100%",
   //    perPage: props.numOfSlides,
   //    wheel: true,
   // };

   return (
      <div className={classes.container_slider}>
         {/* <Splide options={optionsSlide} aria-label="My Favorite Images">
            {imagesSlider}
         </Splide> */}
      </div>
   );
};

export default SliderHomePage;
