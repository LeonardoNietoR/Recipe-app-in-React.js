import React from "react";
import classes from "./LinksSocialNet.module.css";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const LinksSocialNet = () => {
   return (
      <div className={classes.container_socialNetworkLinks}>
         <ul>
            <li>
               <button type="button">
                  <BsFacebook />
               </button>
            </li>
            <li>
               <button type="button">
                  <BsTwitter />
               </button>
            </li>

            <li>
               <button type="button">
                  <BsInstagram />
               </button>
            </li>
            <li>
               <button type="button">
                  <BsYoutube />
               </button>
            </li>
         </ul>
      </div>
   );
};

export default LinksSocialNet;
