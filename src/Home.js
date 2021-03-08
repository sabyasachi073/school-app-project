import React from "react";
import Menu from "./Menu";
import moment from "moment";
import "./Home.css";
import Holiday from "./Holiday";
import Attendance from "./Attendance";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Calendar from "./HomeCalendar";

function Home() {
  return (
    <div className="home">
      <div className="home__menu">
        <Menu button__active="home" />
      </div>
      <div className="home__mainPage">
        {/* Home Header starts */}
        <div className="home__header">
          <div className="home__headerLeft">
            <h2>{moment().format("ddd, D MMMM")}</h2>
            <h1>Good Morning, Sir.</h1>
          </div>
          <div className="home__headerRight">
            <div className="home__search">
              <SearchIcon className="home__searchIcon" />
              <input
                type="text"
                name="home__input"
                placeholder="Search"
                className="home__input"
              />
            </div>
            <button className="home__notification">
              <NotificationsOutlinedIcon className="home__notificationIcon" />
              <p className="home__notificationCount">2</p>
            </button>
          </div>
        </div>
        {/* Home Header ends */}

        {/* Home Holiday starts */}
        <div className="home__holiday">
          <div className="home__holidayList">
            <Holiday />
            <Holiday />
            <Holiday />
          </div>
          <button className="home__holidayButton">
            <ChevronRightIcon className="home__holidayIcon" />
          </button>
        </div>
        {/* Home Holiday ends */}

        {/* Home Bottom starts */}
        <div className="home__bottom">
          <Attendance />
          <Calendar />
        </div>
        {/* Home Bottom ends */}

      </div>
      {/* Home Main Page ends */}
    </div>
  );
}

export default Home;
