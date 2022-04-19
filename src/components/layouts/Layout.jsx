import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <MainHeader />
         <main>{children}</main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
