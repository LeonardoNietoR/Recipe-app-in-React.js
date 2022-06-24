import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CardContent.module.css";
import { slimDownText } from "../../hooks/use-utilities";
import RecipeContext from "../../store/recipe-context";
import Card from "../UI/Card";
import { BiTime, BiLike } from "react-icons/bi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const CardContent = (props) => {
   console.log(props.data.bookmark);
   const { updateRecipeSelected, updateBookmarkList } =
      useContext(RecipeContext);
   const navigate = useNavigate();

   const selectRecipeHandler = () => {
      updateRecipeSelected(props.data);
      navigate("/detail", { replace: false });
      window.scrollTo(0, 0);
   };

   const clickBookmarkHandler = () => {
      updateBookmarkList(props.data, true);
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
            <span className={classes.img_title}>
               {slimDownText(props.data.title, 7)}
            </span>

            <p className={classes.img_summary}>
               {slimDownText(props.data.summary, 15)}
            </p>
         </div>
         <span className={classes.bookmark} onClick={clickBookmarkHandler}>
            {props.data.bookmark ? <BsBookmarkFill /> : <BsBookmark />}
         </span>
      </Card>
   );
};

export default CardContent;
