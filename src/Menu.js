import React from "react";
import "./Menu.css";
import { Button } from "@material-ui/core";
// Button Icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ReceiptRoundedIcon from "@material-ui/icons/ReceiptRounded";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import PermMediaOutlinedIcon from "@material-ui/icons/PermMediaOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const profile__avatar = function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
  );
};

function Menu({ button__active }) {
  return (
    <div className="menu__container">
      <div className="menu">
        <div className="menu__logoContainer">
          <img
            className="menu__logo"
            src="https://sttheresasandila.in/images/school_spec/Logo_small.png"
            alt="menuLogo"
          />
        </div>
        {/* : "" */}
        <div className="menu__buttons">
          <Button variant="contained" className={button__active === "home"&&"active"}>
            <HomeRoundedIcon className="menu__buttonIcons" />
            Home
          </Button>
          <Button variant="contained">
            <AssignmentOutlinedIcon className="menu__buttonIcons" />
            Notice Board
          </Button>
          <Button variant="contained">
            <CalendarTodayOutlinedIcon className="menu__buttonIcons" />
            Attendance
          </Button>
          <Button variant="contained">
            <ReceiptRoundedIcon className="menu__buttonIcons" />
            Fees Details
          </Button>
          <Button variant="contained">
            <DateRangeOutlinedIcon className="menu__buttonIcons" />
            Calendar
          </Button>
          <Button variant="contained">
            <PermMediaOutlinedIcon className="menu__buttonIcons" />
            Multimedia
          </Button>
          <Button variant="contained">
            <DashboardOutlinedIcon className="menu__buttonIcons" />
            Time-tables
          </Button>
          <Button variant="contained">
            <ScheduleIcon className="menu__buttonIcons" />
            Schedules
          </Button>
          <Button variant="contained">
            <PeopleAltRoundedIcon className="menu__buttonIcons" />
            Support Requests
          </Button>
          <Button variant="contained">
            <FlagOutlinedIcon className="menu__buttonIcons" />
            Support
          </Button>
          <Button variant="contained">
            <PersonRoundedIcon className="menu__buttonIcons" />
            Account
          </Button>
        </div>
        <div className="menu__account">
          <div className="avatar">{profile__avatar()}</div>
          <div className="menu__accountDetails">
            <div className="menu__accountName">Fr. Paul D'Souza</div>
            <div className="menu__accountProfile">Admin Account</div>
          </div>
          <UnfoldMoreIcon />
        </div>
      </div>
      <div className="menu__divider">&nbsp;</div>
    </div>
  );
}

export default Menu;
