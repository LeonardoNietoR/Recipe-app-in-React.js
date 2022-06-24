import { useContext } from "react";
import classes from "./BookmarkDropdownMenu.module.css";
import RecipeContext from "../../../store/recipe-context";
import { slimDownText } from "../../../hooks/use-utilities";
import { AiOutlineMinusCircle } from "react-icons/ai";

const BookmarkDropdownMenu = () => {
   const { bookmarkList, updateBookmarkList } = useContext(RecipeContext);

   console.log("bookmark list:", bookmarkList);

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
               <div className={classes.container_title}>
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

   return <div className={classes.container_list}>{displayBookmarkList}</div>;
};

export default BookmarkDropdownMenu;
