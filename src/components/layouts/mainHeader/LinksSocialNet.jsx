import React from "react";
import classes from "./LinksSocialNet.module.css";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const LinksSocialNet = () => {
   return (
      <div className={classes.container_socialNetworkLinks}>
         <ul>
            <li>
               <a href="#react">
                  <BsFacebook />
               </a>
            </li>
            <li>
               <a href="#react">
                  <BsTwitter />
               </a>
            </li>

            <li>
               <a href="#react">
                  <BsInstagram />
               </a>
            </li>
            <li>
               <a href="#react">
                  <BsYoutube />
               </a>
            </li>
         </ul>
      </div>
   );
};

export default LinksSocialNet;
