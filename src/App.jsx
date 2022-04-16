import "./App.css";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
// import { Switch, Route, Redirect } from "react-router-dom";

// start date: April 3rd 2022

function App() {
   const text = "This is an example of a text. Once upon a time... ";
   const regex = /.+\./;

   const matching = text.match(regex);

   console.log(matching);

   const text2 = "This is the dog that tryed to bitabc and after he went";
   const regex2 = /.+?(?=abc)/;
   const matching2 = text2.match(regex2);

   console.log(matching2);

   return (
      <Layout>
         <p>Hello from app component</p>
         {/* <HomePage /> */}
         {/* <Switch>
            <Route path="/">
               <Redirect to="/home" />
            </Route>
            <Route path="/home">
               <HomePage />
            </Route>
         </Switch> */}
      </Layout>
   );
}

export default App;
