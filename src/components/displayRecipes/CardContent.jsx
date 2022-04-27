import { useContext } from "react";
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
   const { updateItemSeletedID } = useContext(RecipeContext);

   const cardStyles = `${classes.container_card} ${
      props.numOfCards === 3 ? classes.container_3cards : ""
   } ${props.slider ? classes["container_card-slider"] : ""}`;

   const selectRecipeHandler = () => {
      updateItemSeletedID(props.data.id);
   };

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
               <span className={classes.time}>
                  <span>
                     <BiTime />
                  </span>
                  <span>{props.data.time}</span> <span>min</span>
               </span>

               <span className={classes.likes}>
                  {/* <BsSuitHeartFill /> */}
                  {/* <BsSuitHeart /> */}
                  <span>
                     <BiLike />
                  </span>
                  <span>{props.data.likes}</span>
               </span>
            </div>
         </div>
         <div className={classes.container_details}>
            <span onClick={selectRecipeHandler} className={classes.img_title}>
               {props.data.title}
            </span>
            <p onClick={selectRecipeHandler} className={classes.img_summary}>
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
