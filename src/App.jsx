import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import DetailPage from "./pages/DetailPage";
import RecipeProvider from "./store/RecipeProvider";
import { Route, Routes, Navigate } from "react-router-dom";

// start date: April 3rd 2022

function App() {
   // const text = "This is an example of a text. Once upon a time...";
   // const regex = /.+?\./;
   // // const regex4 = /.+(?=\s)/g;
   // const regex5 = /^(.+? ){3}/g;
   // // const countWords = text.split(" ");
   // const matching4 = text.match(regex5);
   // console.log(matching4);
   // console.log("lehooo");
   // const matching = text.match(regex);

   return (
      <RecipeProvider>
         <Layout>
            <Routes>
               <Route path="/" element={<Navigate to="/home" />} />
               <Route path="/home" element={<HomePage />} />
               <Route path="/results" element={<ResultsPage />} />
               <Route path="/detail" element={<DetailPage />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
         </Layout>
      </RecipeProvider>
   );
}

export default App;
