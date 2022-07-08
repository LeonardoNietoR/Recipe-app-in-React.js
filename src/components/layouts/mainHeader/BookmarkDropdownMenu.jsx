import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./BookmarkDropdownMenu.module.css";
import RecipeContext from "../../../store/recipe-context";
import { slimDownText } from "../../../hooks/use-utilities";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const BookmarkDropdownMenu = (props) => {
   const { bookmarkList, updateBookmarkList, updateRecipeSelected } =
      useContext(RecipeContext);
   const navigate = useNavigate();

   const selectRecipeHandler = (recipe) => {
      updateRecipeSelected(recipe);
      navigate("/detail", { replace: false });
      window.scrollTo(0, 0);
      props.onClick();
   };

   const deleteBookmarkHandler = (id) => {
      updateBookmarkList(id, false);
   };

   const displayBookmarkList = (
      <ul>
         {bookmarkList.map((recipe) => (
            <li key={recipe.id} className={classes.li}>
               <div className={classes.container_img}>
                  <img src={recipe.image} alt={`img_{recipe.id}`} />
               </div>
               <div
                  className={classes.container_title}
                  onClick={selectRecipeHandler.bind(null, recipe)}
               >
                  <span>{slimDownText(recipe.title, 6)}</span>
               </div>
               <button
                  type="button"
                  className={classes.close_btn}
                  onClick={deleteBookmarkHandler.bind(null, recipe.id)}
               >
                  <AiOutlineMinusCircle />
               </button>
            </li>
         ))}
      </ul>
   );

   const messageNoBookmarks = (
      <div className={classes.container_no_bookmark}>
         <span>
            <BsBookmark />
         </span>
         <span>No bookmarks yet</span>
      </div>
   );

   const contentToBeDisplayed =
      bookmarkList.length > 0 ? displayBookmarkList : messageNoBookmarks;

   return (
      <div
         className={`${classes.container_list} ${
            !props.showBookmark && classes.hide
         }`}
      >
         {contentToBeDisplayed}
      </div>
   );
};

export default BookmarkDropdownMenu;
