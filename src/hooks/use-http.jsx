import { useState, useCallback } from "react";

const APP_KEY = process.env.REACT_APP_API_KEY.slice(0, -1);

// Local storage key names:

const useHttp = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

   const httpRequest = useCallback(async (requestConfig, applyData) => {
      // setIsLoading(true);
      setError(null);

      const storage = localStorage.getItem(`${requestConfig.locStorage}`);

      if (storage) {
         applyData(JSON.parse(storage), true);
      } else {
         try {
            const response = await fetch(
               `${requestConfig.url}&apiKey=${APP_KEY}`
            );

            console.log(response);
            if (!response.ok) {
               throw new Error(`Request failed. Error ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            applyData(data);
         } catch (err) {
            console.log("ERRRRROOOORRR:", err);
            setError(err.message);
         }
      }
      // isLoading(false);
   }, []);

   return {
      httpRequest,
      error,
   };
};

export default useHttp;
