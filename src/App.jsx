import { useEffect } from "react";
import "./App.css";

// start date: April 3rd 2022

const APP_KEY = process.env.REACT_APP_API_KEY.slice(0, -1);

function App() {
   const fetchMeals = async () => {
      try {
         const response = await fetch(
            `https://api.spoonacular.com/recipes/654905/nutritionWidget.json?apiKey=${APP_KEY}`
         );

         const data = await response.json();

         console.log(data);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      fetchMeals();
   }, []);

   return (
      <div>
         <p>HEllo from the space</p>
      </div>
   );
}

export default App;
