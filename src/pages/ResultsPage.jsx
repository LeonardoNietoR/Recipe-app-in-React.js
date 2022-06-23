import { useState, useEffect, useContext, Fragment } from "react";
import classes from "./ResultsPage.module.css";
import ReactPaginate from "react-paginate";
import useHttp from "../hooks/use-http";
import RecipeContext from "../store/recipe-context";
import CardContent from "../components/displayRecipes/CardContent";
import Spinner from "../components/UI/Spinner";

const NUMBER_OF_RESULTS = 36;
const RECIPES_PER_PAGE = 12;

const ResultsPage = () => {
   const [pageNumber, setPageNumber] = useState(0);

   const { httpRequest, recipesData, error, noResultsFound, status } =
      useHttp();

   const { searchValue } = useContext(RecipeContext);

   useEffect(() => {
      if (searchValue && searchValue.trim() !== "") {
         httpRequest({
            url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&addRecipeInformation=true&sort=popularity&fillIngredients=true&addRecipeNutrition=true&instructionsRequired=true&number=${NUMBER_OF_RESULTS}`,

            locStorage: searchValue,
         });
      }

      window.scrollTo(0, 0);
   }, [httpRequest, searchValue, pageNumber]);

   const pagesVisited = pageNumber * RECIPES_PER_PAGE;

   // pageCount: Total amount of pages
   const pageCount = Math.ceil(recipesData?.length / RECIPES_PER_PAGE);

   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };

   const displayRecipes = (
      <ul className={classes.ul}>
         {recipesData &&
            recipesData
               .slice(pagesVisited, pagesVisited + RECIPES_PER_PAGE)
               .map((recipe) => (
                  <li key={recipe.id}>
                     <CardContent data={recipe} numOfCards={4} />
                  </li>
               ))}
      </ul>
   );

   let displayContent;

   if (error) displayContent = <p className={classes.error_message}>{error}</p>;
   if (noResultsFound && !error)
      displayContent = (
         <p className={classes.notFound_message}>
            Sorry - we could not find any results for{" "}
            <span className={classes.search_reference}>"{searchValue}"</span>
         </p>
      );

   if (!noResultsFound && !error)
      displayContent = (
         <Fragment>
            <h2>
               Results for{" "}
               <span className={classes.search_reference}>"{searchValue}"</span>
            </h2>
            {displayRecipes}
         </Fragment>
      );

   return (
      <section className={classes.section}>
         {status === "pending" ? (
            <Spinner className={classes.spinner} />
         ) : (
            <Fragment>
               {displayContent}
               <ReactPaginate
                  previousLabel="< Prev"
                  nextLabel="Next >"
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={
                     recipesData?.length <= 12
                        ? classes.hide
                        : classes.paginationBtns
                  }
                  previousLinkClassName={classes.previousBtn}
                  nextLinkClassName={classes.nextBtn}
                  disabledClassName={classes.paginationDisabled}
                  activeClassName={classes.paginationActive}
                  renderOnZeroPageCount={null}
               />
            </Fragment>
         )}
      </section>
   );
};

export default ResultsPage;
