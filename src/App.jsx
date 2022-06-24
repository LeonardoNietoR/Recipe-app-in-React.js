import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import DetailPage from "./pages/DetailPage";
import RecipeProvider from "./store/RecipeProvider";
import { Route, Routes, Navigate } from "react-router-dom";

// start date: April 3rd 2022

function App() {
   // const arr1 = [1, 2, 3, 4];

   // const ind = arr1.findIndex((el) => el === 3);

   // const arr2 = arr1.splice(ind, 1);

   // console.log(arr2);

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
