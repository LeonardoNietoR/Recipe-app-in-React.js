import classes from "./Spinner.module.css";

const Spinner = (props) => {
   return (
      <div className={`${classes.container_spinner} ${props.className}`}>
         <div className={`${classes.spinner} ${props.className}`}>
            <div></div>
            <span>loading...</span>
            <div></div>
         </div>
      </div>
   );
};

export default Spinner;
