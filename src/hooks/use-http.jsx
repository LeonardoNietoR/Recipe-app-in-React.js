import { useEffect } from "react";

const APP_KEY = process.env.REACT_APP_API_KEY.slice(0, -1);

const useHttp = () => {
   const fetchMeals = async () => {
      try {
         const response = await fetch(
            `https://api.spoonacular.com/recipes/random?number=10&apiKey=${APP_KEY}`
         );
         // const response = await fetch(
         //    `https://api.spoonacular.com/recipes/654905/nutritionWidget.json?apiKey=${APP_KEY}`
         // );

         const data = await response.json();
         console.log(data);
      } catch (err) {
         console.log(err);
      }
   };
   // console.log(image);
   // useEffect(() => {
   //    fetchMeals();
   // }, []);

   return <div>useHttp</div>;
};

export default useHttp;
