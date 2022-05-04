import React from "react";

const defineSummaryText = (text) => {
   // regex1: match all html tags inside the string to delete them.
   const regex1 = /<.+?>/g;
   return `${text.trim()}`.replace(regex1, "");
};

const DisplaySummary = ({ textSummary }) => {
   const stylesSummary = {
      maxWidth: "45rem",
      fontSize: "1.9rem",
      color: "var(--color-paragraph-1)",
      border: "2px solid red",
      lineHeight: "2.5rem",
   };

   return <p style={stylesSummary}>{defineSummaryText(textSummary)}</p>;
};

export default DisplaySummary;
