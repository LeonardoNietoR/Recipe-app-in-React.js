import React from "react";
import classes from "./LinksSocialNet.module.css";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const LinksSocialNet = () => {
   return (
      <div className={classes.container_socialNetworkLinks}>
         <ul>
            <li>
               <a href="#">
                  <BsFacebook />
               </a>
            </li>
            <li>
               <a href="#">
                  <BsTwitter />
               </a>
            </li>

            <li>
               <a href="#">
                  <BsInstagram />
               </a>
            </li>
            <li>
               <a href="#">
                  <BsYoutube />
               </a>
            </li>
         </ul>
      </div>
   );
};

export default LinksSocialNet;
