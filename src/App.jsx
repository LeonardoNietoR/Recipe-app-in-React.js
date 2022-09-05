import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import DetailPage from "./pages/DetailPage";
import RecipeProvider from "./store/RecipeProvider";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
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
