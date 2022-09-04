import { useEffect } from "react";
import classes from "./SliderHomePage.module.css";
import useHttp from "../../hooks/use-http";
import CardContent from "./CardContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Spinner from "../UI/Spinner";
import "@splidejs/react-splide/css";

const SliderHomePage = (props) => {
   const { httpRequest, recipesData, error, status } = useHttp();

   console.log(`status: ${status}`);

   useEffect(() => {
      httpRequest({
         url: props.url,
         locStorage: props.locStorage,
      });
   }, [httpRequest, props.url, props.locStorage]);

   if (status === "pending" && props.showSpinner === true) {
      return <Spinner />;
   }
   if (status === "pending" && props.showSpinner !== true) {
      return "";
   }

   if (status === "completed" && error) {
      return <p>{error}</p>;
   }

   const imagesSlider = recipesData?.map((recipe) => (
      <SplideSlide key={recipe.id}>
         <CardContent
            data={recipe}
            slider={true}
            numOfCards={props.numOfSlides}
         />
      </SplideSlide>
   ));

   const optionsSlide = {
      rewind: true,
      pagination: false,
      gap: "1.5rem",
      drag: "free",
      width: "100%",
      perPage: props.numOfSlides,
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
