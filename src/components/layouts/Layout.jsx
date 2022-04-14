import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainHeader from "./mainHeader/MainHeader";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <MainHeader />
         <main>{children}</main>
      </Fragment>
   );
};

export default Layout;
