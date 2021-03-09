import React, { useState } from "react";
import Menu from "./Menu";
import Search from "./Search";
import "./Attendance.css";
import Dropdown from "./Dropdown";
import Date from "./Date";

function Attendance() {
  const [classValue, setClassValue] = useState(null);
  const [section, setSection] = useState(null);
  const [month, setMonth] = useState(null);
  const [session, setSession] = useState(null);
  const [date, setDate] = useState(0);

  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay= 0;
  const dateArr = [];
  
  for (var i = 0; i < 15; i++) {
    dateArr.push(
      <Date
        date={i+1}
        day={day[(startDay+i)%day.length]}
        value={date}
        onChange={(val) => setDate(val)}
      />
    );
  }

  return (
    <div className="attendance">
      <Menu button__active="attendance" />
      <div className="attendance__mainPage">
        <div className="attendance__header">
          <div className="attendance__headerLeft">
            <h1>Attendance</h1>
          </div>
          <Search />
        </div>

        <div className="attendance__dropdowns">
          <Dropdown
            title="Class"
            dropdownOptions={[
              "LKG",
              "UKG",
              "I",
              "II",
              "III",
              "IV",
              "V",
              "VI",
              "VII",
              "VIII",
              "IX",
              "X",
              "XI",
              "XII",
            ]}
            value={classValue}
            onChange={(val) => setClassValue(val)}
          />
          <Dropdown
            title="Section"
            dropdownOptions={["A", "B", "C", "D", "E"]}
            value={section}
            onChange={(val) => setSection(val)}
          />
          <Dropdown
            title="Month"
            dropdownOptions={[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
            value={month}
            onChange={(val) => setMonth(val)}
          />
          <Dropdown
            title="Session"
            dropdownOptions={[
              "2010-2011",
              "2011-2012",
              "2012-2013",
              "2013-2014",
              "2014-2015",
              "2015-2016",
              "2016-2017",
              "2017-2018",
              "2018-2019",
              "2019-2020",
              "2020-2021",
              "2021-2022",
            ]}
            value={session}
            onChange={(val) => setSession(val)}
          />
        </div>

        <div className="attendance__date">
          {dateArr}
        </div>
      </div>
    </div>
  );
}

// onChange={val => setValue(val)} - This will set the value in 'Value' that was selected earlier in the dropdown

export default Attendance;
