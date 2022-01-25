import React from "react";
import classes from "./Buttons.module.css";
import { Button } from "@material-ui/core";

function Buttons(props) {
  return (
    <>
      {!props.hideBtns ? (
        <div className={classes.btns}>
          <Button variant="outlined" type="submit" onClick={props.search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className={classes.hide}>
          <Button variant="outlined" type="submit" onClick={props.search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </>
  );
}

export default Buttons;
