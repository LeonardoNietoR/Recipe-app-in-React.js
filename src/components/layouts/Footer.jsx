import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <p className={classes.paragraph}>
            &copy; Copyright by Leonardo Nieto. All rights reserved
         </p>
      </footer>
   );
};

export default Footer;
