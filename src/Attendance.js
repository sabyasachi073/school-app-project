import React from "react";
import "./Attendance.css";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const percentage = 80;

function Attendance() {
  return (
    <div className="attendance">
      {/* Attendance Hader starts */}
      <div className="attendance__header">
        <div className="attendance__headerInfo">
          <h1>Attendance</h1>
          <p>Today Overall Attendance</p>
        </div>
        <CalendarTodayOutlinedIcon className="attendance__headerIcon" />
      </div>
      {/* Attendance Header ends */}

      {/* Attendence Information starts */}
      <div className="attendance__info">

        {/* Progressbar starts */}
        <div className="progressbar">
          <CircularProgressbarWithChildren
            value={80}
            styles={buildStyles({
              pathColor: "#11B826",
              trailColor: "#EE5C51",
              strokeLinecap: "butt",
              rotation: 1 + (1 - percentage / 100) / 2,
            })}
          >
            <div className="progressbar__text">
              <p>Total Students Present</p>
              <h3>1024</h3>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        {/* Progressbar ends */}

        {/* Attendance Percentage starts */}
        <div className="attendance__percentage">
          <div className="attendance__percentageInfo">
            <p>Present (%)</p>
            <p className="attendance__present">98%</p>
          </div>
          <div className="attendance__percentageInfo">
            <p>Absent (%)</p>
            <p className="attendance__absent">20%</p>
          </div>
          <div className="attendance__percentageInfo">
            <p>Absent</p>
            <p className="attendance__absent">214</p>
          </div>
        </div>
        {/* Attendance Percentage ends */}
      </div>
      {/* Attendance Information ends */}
      <div className="attendance__expand">
        Expand <ChevronRightIcon className="attendance__expandIcon"/>
      </div>
    </div>
  );
}

export default Attendance;
