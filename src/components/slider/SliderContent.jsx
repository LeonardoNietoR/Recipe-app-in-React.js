import classes from "./SliderContent.module.css";
import Card from "../UI/Card";
import { BiTime, BiLike } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

// const NUM_WORDS_PER_PARAGRAPH = 21

const defineSummaryText = (text) => {
   // regex1: match all characters until the space # 20. To limit the string
   const regex1 = /^(.+? ){16}/g;
   const filterText = text.match(regex1);
   // regex2: match all html tags inside the string to delete them.
   const regex2 = /<.+?>/g;
   const finalText = `${filterText[0].trim()}...`.replace(regex2, "");

   return finalText;
};

const SliderContent = (props) => {
   return (
      <Card className={classes.container_card}>
         <div className={classes.container_img}>
            <img
               className={classes.img}
               src={props.data.image}
               alt={`Image_${props.data.id}`}
            />
            <div className={classes.img_filter}></div>
            <div className={classes.container_timeLikes}>
               <span className={classes.time}>
                  <BiTime /> <span>{props.data.time} min</span>
               </span>

               <span className={classes.likes}>
                  {/* <BsSuitHeartFill /> */}
                  {/* <BsSuitHeart /> */}
                  <BiLike />
                  <span>{props.data.likes}</span>
               </span>
            </div>
         </div>
         <div className={classes.container_details}>
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

export default SliderContent;
