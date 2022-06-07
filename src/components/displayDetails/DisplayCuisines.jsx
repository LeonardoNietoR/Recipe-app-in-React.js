import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RecipeContext from "../../store/recipe-context";

const DisplayCuisines = ({ cuisines }) => {
   const { updateSearchValue } = useContext(RecipeContext);
   const navigate = useNavigate();

   const searchCuisineHandler = (event) => {
      updateSearchValue(event.target.dataset.cuisine);
      navigate("/results", { replace: false });
   };

   if (cuisines.length > 0) {
      const cuisinesList = cuisines.map((cuisine, i) => (
         <li
            key={`${cuisine}_${i}`}
            data-cuisine={cuisine}
            onClick={searchCuisineHandler}
         >
            {cuisine}
         </li>
      ));
      return <ContainerList>{cuisinesList}</ContainerList>;
   }
};

export default DisplayCuisines;

const ContainerList = styled.ul`
   max-width: 55rem;
   margin: 0 auto 3rem auto;
   display: flex;

   & li {
      color: var(--color-white);
      background-color: var(--color-grey-dark);
      list-style-type: none;
      padding: 0.5rem 0.9rem;
      margin-right: 0.7rem;
      border-radius: 6px;
      border: 1px solid #999;
      cursor: pointer;
   }

   & li:hover {
      text-decoration: underline;
   }
`;
