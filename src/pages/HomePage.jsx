import React, { useEffect } from "react";
import classes from "./HomePage.module.css";
import useHttp from "../hooks/use-http";
import SliderHomePage from "../components/UI/slider/SliderHomePage";

const HomePage = () => {
   // const { fetchMeals } = useHttp();
   // In this component could be imported the useHttp hook three times for each of the sliders, to pass them the info that needs to be displayed.

   // useEffect(()=>{

   // },[])

   return (
      <section>
         <div className={classes.collection_1}>
            <h2>Popular picks</h2>
            <SliderHomePage amountOfSlides={3} locStorage="images" />
         </div>
         <div className={classes.collection_2}>
            <h2>Ready in just 30 minutes!</h2>
         </div>
         <div className={classes.collection_2}>
            <h2>Desserts</h2>
         </div>
         <div className={classes.collection_2}>
            <h2>Drinks and cocktails</h2>
         </div>
      </section>
   );
};

export default HomePage;
