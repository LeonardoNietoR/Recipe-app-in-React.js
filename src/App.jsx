import "./App.css";
import Layout from "./components/layouts/Layout";
// import { Switch, Route, Redirect } from "react-router-dom";

// start date: April 3rd 2022

function App() {
   return (
      <Layout>
         <p>Hello from app component</p>
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
