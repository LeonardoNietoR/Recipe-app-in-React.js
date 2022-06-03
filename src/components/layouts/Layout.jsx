import { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
   const [showImageHomePage, setShowImageHomePage] = useState(false);
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/home") {
         setShowImageHomePage(true);
      } else setShowImageHomePage(false);
   }, [location.pathname]);

   const imageHomePage = (
      <div className={classes["container_initial-message"]}>
         <div className={classes.image_home_message}></div>
         <div className={classes.image_home_message}></div>
         <span>Find more than 300.0000 recipes around the world!</span>
      </div>
   );

   return (
      <Fragment>
         <MainHeader />
         {showImageHomePage && imageHomePage}
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
