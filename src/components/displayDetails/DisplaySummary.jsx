import { useState } from "react";
import styled from "styled-components";

const defineSummaryText = (text, shorten = true) => {
   // regex1: match all characters until the space # 16 (To limit the string)
   const regex1 = /^(.+? ){50}/g;
   // regex2: match all html tags inside the string to delete them.
   const regex2 = /<.+?>/g;

   if (!shorten) {
      return `${text.trim()}`.replace(regex2, "");
   }

   const filterText = text.match(regex1);
   return `${filterText[0].trim()}...`.replace(regex2, "");
};

const DisplaySummary = ({ textSummary }) => {
   const [summaryDisplay, setSummaryDisplay] = useState({
      text: defineSummaryText(textSummary),
      isLongText: true,
   });

   const showCompleteTextHandler = () => {
      setSummaryDisplay((prev) => ({
         text: defineSummaryText(textSummary, !prev.isLongText),
         isLongText: !prev.isLongText,
      }));
   };

   return (
      <Summary>
         <p>{summaryDisplay.text}</p>
         <button onClick={showCompleteTextHandler}>
            {summaryDisplay.isLongText ? "More" : "Less"}
         </button>
      </Summary>
   );
};

export default DisplaySummary;

const Summary = styled.div`
   max-width: 55rem;
   font-size: 1.9rem;
   color: var(--color-paragraph-1);
   margin: 0 auto 3rem auto;

   & button {
      font-size: 2rem;
      color: #333;
      margin: 1rem 0 0 0;
      padding: 0.2rem 2.5rem;
      border: 1px solid #999;
      border-radius: 5px;
      cursor: pointer;
   }
`;
