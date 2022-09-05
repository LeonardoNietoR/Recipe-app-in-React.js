import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RecipeContext from "../../store/recipe-context";
import { BsFillPatchCheckFill } from "react-icons/bs";

const DisplayDiet = ({ diets }) => {
   const { updateSearchValue } = useContext(RecipeContext);
   const navigate = useNavigate();

   const selectDietHandler = (event) => {
      updateSearchValue(event.target.dataset.diet);
      navigate("/results", { replace: false });
   };

   if (diets.length > 0) {
      const dietsList = diets.map((diet, i) => (
         <li key={`${diet}_${i}`}>
            <span className="check_icon">
               <BsFillPatchCheckFill />
            </span>
            <span onClick={selectDietHandler} data-diet={diet}>
               {diet}
            </span>
         </li>
      ));

      return <ContainerList>{dietsList}</ContainerList>;
   }
};

export default DisplayDiet;

const ContainerList = styled.ul`
   max-width: 40rem;
   margin: 3rem auto;

   & li {
      margin-bottom: 0.4rem;
      list-style-type: none;
      display: flex;
      align-items: center;
      cursor: pointer;
   }

   & li:hover {
      text-decoration: underline;
   }

   & .check_icon {
      width: 3.2rem;
      height: 3.2rem;
      margin: 0 0.6rem 0 0;
      display: inline-block;
      color: rgb(9, 143, 58);
      font-size: 3rem;
      // border: 1px solid red;
   }

   & span:nth-of-type(2) {
      // border: 1px solid green;
   }
`;
