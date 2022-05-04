import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CardContent.module.css";
import RecipeContext from "../../store/recipe-context";
import Card from "../UI/Card";
import { BiTime, BiLike } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const defineSummaryText = (text) => {
   // regex1: match all characters until the space # 16 (To limit the string)
   const regex1 = /^(.+? ){16}/g;
   const filterText = text.match(regex1);
   // regex2: match all html tags inside the string to delete them.
   const regex2 = /<.+?>/g;
   const finalText = `${filterText[0].trim()}...`.replace(regex2, "");

   return finalText;
};

const CardContent = (props) => {
   const { updateRecipeSelected } = useContext(RecipeContext);
   const navigate = useNavigate();

   const selectRecipeHandler = () => {
      updateRecipeSelected(props.data);
      navigate("/detail", { replace: false });
   };

   const cardStyles = `${classes.container_card} ${
      props.numOfCards === 3 ? classes.container_3cards : ""
   } ${props.slider ? classes["container_card-slider"] : ""}`;

   return (
      <Card className={cardStyles}>
         <div className={classes.container_img}>
            <img
               className={classes.img}
               src={props.data.image}
               alt={`Image_${props.data.id}`}
            />
            <div className={classes.img_filter}></div>
            <div className={classes.container_timeLikes}>
               <div className={classes.time}>
                  <span>
                     <BiTime />
                  </span>
                  <span>{props.data.time}</span> <span>min</span>
               </div>

               <div className={classes.likes}>
                  {/* <BsSuitHeartFill /> */}
                  {/* <BsSuitHeart /> */}
                  <span>
                     <BiLike />
                  </span>
                  <span>{props.data.likes}</span>
               </div>
            </div>
         </div>
         <div
            className={classes.container_details}
            onClick={selectRecipeHandler}
         >
            <span className={classes.img_title}>{props.data.title}</span>
            <p className={classes.img_summary}>
               {defineSummaryText(props.data.summary)}
            </p>
         </div>
         <span className={classes.bookmark}>
            <BsBookmark />
         </span>
      </Card>
   );
};

export default CardContent;
