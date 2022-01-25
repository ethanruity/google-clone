import React from "react";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import classes from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav className={classes.header}>
      <div className={classes.headerLeft}>
        <Link to="/">About</Link>
        <Link to="/">Store</Link>
      </div>
      <div className={classes.headerRight}>
        <Link to="/">Gmail</Link>
        <Link to="/">Images</Link>
        <AppsIcon style={{ marginRight: "20", cursor: "pointer" }} />
        <Avatar style={{ transform: "scale(0.8)", cursor: "pointer" }} />
      </div>
    </nav>
  );
}

export default HomeNav;
