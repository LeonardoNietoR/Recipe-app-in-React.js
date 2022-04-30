import { Fragment } from "react";
import MainHeader from "./mainHeader/MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
   return (
      <Fragment>
         <MainHeader />

         <div
            style={{
               width: "100%",
               height: "auto",
               position: "absolute",
               top: "calc(var(--height-header) + 2rem)",
            }}
         >
            <main>{children}</main>
            <Footer />
         </div>
      </Fragment>
   );
};

export default Layout;
