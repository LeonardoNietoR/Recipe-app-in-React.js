import { Fragment, useState } from "react";
import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
   const [showImageHomePage, setShowImageHomePage] = useState(true);

   const imageHomePage = (
      <div className={classes["container_initial-message"]}>
         <span>Find more than 300.0000 recipes around the world!</span>
      </div>
   );

   return (
      <Fragment>
         <MainHeader />
         {imageHomePage}
         <div
            className={`${classes["container_main-footer"]} ${
               showImageHomePage ? classes.showImageHome : ""
            }`}
         >
            <main>{children}</main>
            <Footer />
         </div>
      </Fragment>
   );
};

export default Layout;
