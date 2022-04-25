import React from "react";
import classes from "./HomePage.module.css";
import SliderHomePage from "../components/displayRecipes/SliderHomePage";

const HomePage = () => {
   const slider1Url = "https://api.spoonacular.com/recipes/random?number=10";
   const slider2Url = "https://api.spoonacular.com/recipes/random?number=10";
   const slider3Url = "https://api.spoonacular.com/recipes/random?number=10";
   const slider4Url = "https://api.spoonacular.com/recipes/random?number=10";

   return (
      <section>
         <div className={classes.collection}>
            <h2>Popular picks</h2>
            <SliderHomePage
               numOfSlides={3}
               url={slider1Url}
               locStorage="images"
            />
         </div>
         <div className={classes.collection}>
            <h2>Ready in just 30 minutes!</h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider1Url}
               locStorage="images"
            />
         </div>
         <div className={classes.collection}>
            <h2>Desserts</h2>
            <SliderHomePage
               numOfSlides={4}
               url={slider1Url}
               locStorage="images"
            />
         </div>
         <div className={classes.collection}>
            <h2>Drinks and cocktails</h2>
         </div>
      </section>
   );
};

export default HomePage;
