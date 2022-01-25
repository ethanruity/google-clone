import React from "react";
import classes from "./Home.module.css";
import HomeNav from "../../components/Nav/HomeNav";
import GoogleLogo from "../../imgs/googlelogo.png";
import Search from "../../components/SearchBar/Search";

function Home() {
  return (
    <div className={classes.home}>
      <HomeNav />

      <div className={classes.body}>
        <img src={GoogleLogo} alt="Google Logo" />

        <div className={classes.input}>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
