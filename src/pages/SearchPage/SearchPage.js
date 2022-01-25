import React from "react";
import { useSearchValue } from "../../SearchProvider";
import classes from "./SearchPage.module.css";
import useGoogleSearch from "../../hooks/useGoogleSearch";
import { Link } from "react-router-dom";
import GoogleLogo from "../../imgs/googlelogo.png";
import Search from "../../components/SearchBar/Search";
import IconsBar from "../../components/Icons/IconsBar";
import SearchResult from "../../components/Result/SearchResult";

function SearchPage() {
  const [{ term }, dispatch] = useSearchValue();
  const { data } = useGoogleSearch(term);
  console.log(data);

  return (
    <div className={classes.searchPage}>
      <div className={classes.header}>
        <Link to="/">
          <img src={GoogleLogo} alt="Google Logo" className={classes.logo} />
        </Link>
        <div className={classes.headerBody}>
          <Search word={term} hideBtns />
          <IconsBar />
        </div>
      </div>
      {term && (
        <div className={classes.results}>
          <p className={classes.resNum}>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>
          {data?.items.map((item, i) => (
            <SearchResult key={i} result={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
