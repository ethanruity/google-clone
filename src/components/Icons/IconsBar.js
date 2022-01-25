import React from "react";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@material-ui/icons";
import classes from "./IconsBar.module.css";

function IconsBar() {
  return (
    <div className={classes.options}>
      <div className={classes.optionsLeft}>
        <div className={classes.option}>
          <SearchIcon style={{ fontSize: "20" }} />
          <Link to="/search">All</Link>
        </div>
        <div className={classes.option}>
          <Description style={{ fontSize: "20" }} />
          <Link to="/search">News</Link>
        </div>
        <div className={classes.option}>
          <Image style={{ fontSize: "20" }} />
          <Link to="/search">Images</Link>
        </div>
        <div className={classes.option}>
          <LocalOffer style={{ fontSize: "20" }} />
          <Link to="/search">shopping</Link>
        </div>
        <div className={classes.option}>
          <Room style={{ fontSize: "20" }} />
          <Link to="/search">maps</Link>
        </div>
        <div className={classes.option}>
          <MoreVert style={{ fontSize: "20" }} />
          <Link to="/search">more</Link>
        </div>
      </div>

      <div className={classes.optionsRight}>
        <div className={classes.option}>
          <Link to="/search">Settings</Link>
        </div>
        <div className={classes.option}>
          <Link to="/search">Tools</Link>
        </div>
      </div>
    </div>
  );
}

export default IconsBar;
