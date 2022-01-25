import React from "react";
import classes from "./SearchResult.module.css";
import { MoreVert } from "@material-ui/icons";

function SearchResult({ result }) {
  return (
    <div className={classes.res}>
      <a className={classes.resLink} href={result.link}>
        {result.displayLink}
        <MoreVert style={{ fontSize: "15", paddingLeft: "10" }} />
      </a>
      <a className={classes.resTitle} href={result.link}>
        <h2>{result.title}</h2>
      </a>

      <p className={classes.resSnippet}>{result.snippet}</p>
    </div>
  );
}

export default SearchResult;
