import { Fragment } from "react";
import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <MainHeader />

         <div className={`${classes["container_main-footer"]}`}>
            <main>{children}</main>
            <Footer />
         </div>
      </Fragment>
   );
};

export default Layout;
