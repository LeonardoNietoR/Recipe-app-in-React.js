import React from "react";
import classes from "./Footer.module.css";
import LinksSocialNet from "./mainHeader/LinksSocialNet";

const Footer = () => {
   return (
      <footer className={classes.footer}>
         <div className={classes.container_columns}>
            <div className={classes.column}>
               <h3 className={classes.brand_name}>Cook & Food</h3>
               <p>Find more than 300.000 recipes around the world.</p>
            </div>
            <div className={classes.column}>
               <h3 id="contact">Contact</h3>
               <p>example@cookandfood.co</p>
               <p>939-333-3133</p>
            </div>

            <div className={classes.column}>
               <div>
                  <h3>Recieve news about recipes</h3>

                  <form className={classes.form} action="">
                     <input type="email" placeholder="Your email here" />
                     <button>Send</button>
                  </form>
               </div>
               <div>
                  <h3>Follow</h3>
                  <LinksSocialNet />
               </div>
            </div>
         </div>
         <p className={classes.copyright}>
            &copy; 2022 Leonardo Nieto R. All Rights Reserved
         </p>
      </footer>
   );
};

export default Footer;
