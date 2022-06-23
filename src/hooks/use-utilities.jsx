export const slimDownText = (text, amountWords) => {
   // REGEX1: match all characters until the space specified in "amountWords" (To limit the amount of words in string)
   const stringRegex1 = `^(.+? ){${amountWords}}`;
   const regex1 = new RegExp(stringRegex1, "g");
   const filterText = text.match(regex1);

   if (!filterText) return text;

   // REGEX2: match all html tags inside the string to delete them.
   const regex2 = /<.+?>/g;
   const finalText = `${filterText[0].trim()}...`.replace(regex2, "");

   return finalText;
};
