import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import classes from "./Search.module.css";
import Buttons from "../Buttons/Buttons";
import { useSearchValue } from "../../SearchProvider";

function Search({ hideBtns = false, word = "" }) {
  const [state, dispatch] = useSearchValue();
  const [input, setInput] = useState(word);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    navigate("/search");
  };

  return (
    <form className={classes.search}>
      <div className={classes.input}>
        <SearchIcon onClick={search} className={classes.inputIcon} />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <MicIcon />
      </div>
      <Buttons search={search} hideBtns={hideBtns} />
    </form>
  );
}

export default Search;
