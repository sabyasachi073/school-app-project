import React from "react";
import "./Style/Search.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

function Search({ page }) {
  return (
    <div className={`search__container ${page === "home" && "home__search"}`}>
      <div className="search">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          name="search__input"
          placeholder="Search"
          className="search__input"
        />
      </div>
      <button className="search__notification">
        <NotificationsOutlinedIcon className="search__notificationIcon" />
        <p className="search__notificationCount">2</p>
      </button>
    </div>
  );
}

export default Search;
