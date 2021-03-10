import React, { useState } from "react";
import "./HomeCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function HomeCalendar() {
  const [value, onChange] = useState(new Date()); // Holds the value(date) selected by the user. It initially hold the current date

  return (
    <div className="calendar">
      <div className="calendar__header">
        <h2>Calendar</h2>
        <DateRangeOutlinedIcon className="calendar__headerIcon"/>
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        prev2Label={null}
        next2Label={null}
      />
      <div className="calendar__expand">
          Expand <ChevronRightIcon className="calendar__expandIcon" />
      </div>
    </div>
    
  );
}

export default HomeCalendar;
