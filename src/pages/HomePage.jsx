import React from "react";
import classes from "./HomePage.module.css";
import SliderHomePage from "../components/UI/SliderHomePage";

const HomePage = () => {
   return (
      <section>
         <div className={classes.collection_1}>
            <h2>Popular picks</h2>
            <SliderHomePage />
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
