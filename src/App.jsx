import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import RecipeProvider from "./store/RecipeProvider";
// import { Switch, Route, Redirect } from "react-router-dom";

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
            {/* <HomePage /> */}
            <ResultsPage />

            {/* <Switch>
            <Route path="/">
            <Redirect to="/home" />
            </Route>
            <Route path="/home">
            <HomePage />
            </Route>
         </Switch> */}
         </Layout>
      </RecipeProvider>
   );
}

export default App;
