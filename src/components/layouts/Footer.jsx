import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
   return (
      <div className={classes.footer}>
         <p className={classes.paragraph}>
            &copy; Leonardo Nieto all rights reserved
         </p>
      </div>
   );
};

export default Footer;
