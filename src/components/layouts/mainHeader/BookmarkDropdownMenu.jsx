import { useContext } from "react";
import classes from "./BookmarkDropdownMenu.module.css";
import RecipeContext from "../../../store/recipe-context";
import { slimDownText } from "../../../hooks/use-utilities";

const BookmarkDropdownMenu = () => {
   const { bookmarkList } = useContext(RecipeContext);

   const displayBookmarkList = (
      <ul>
         {bookmarkList.map((recipe) => (
            <li key={recipe.id} className={classes.li}>
               <div className={classes.container_img}>
                  <img src={recipe.image} alt={`img_{recipe.id}`} />
               </div>
               <div className={classes.container_title}>
                  <span>{slimDownText(recipe.title, 3)}</span>
               </div>
            </li>
         ))}
      </ul>
   );

   return <div className={classes.container_list}>{displayBookmarkList}</div>;
};

export default BookmarkDropdownMenu;
