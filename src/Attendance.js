import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Search from "./Search";
import "./Attendance.css";
import Dropdown from "./Dropdown";
import Date from "./Date";
import Student from "./Student";

function Attendance() {
  const [classValue, setClassValue] = useState(null);
  const [section, setSection] = useState(null);
  const [month, setMonth] = useState(null);
  const [session, setSession] = useState(null);
  const [date, setDate] = useState(0);
  const [present, setPresent] = useState([]);

  const totalPeriod = 8;

  const classArr = [
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
  ];
  const sectionArr = ["A", "B", "C", "D", "E"];
  const monthArr = [
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
  ];
  const sessionArr = [
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
  ];

  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 0;
  const dateArr = [];

  for (var k = 0; k < 15; k++) {
    dateArr.push(
      <Date
        date={k + 1}
        day={day[(startDay + k) % day.length]}
        value={date}
        onChange={(val) => setDate(val)}
      />
    );
  }

  // For the pesent absent field of student
  let createPresent = [];
  for (var j = 1; j <= totalPeriod; j++) {
    createPresent = [
      ...createPresent,
      {
        period: j,
        present: false,
      },
    ];
  }

  useEffect(() => {
    setPresent(createPresent);
  }, []);

  const periods = [];
  let ordinal__indicator = "";

  for (var i = 1; i <= totalPeriod; i++) {
    if (i % 10 === 1) ordinal__indicator = "st";
    else if (i % 10 === 2) ordinal__indicator = "nd";
    else if (i % 10 === 3) ordinal__indicator = "rd";
    else ordinal__indicator = "th";

    periods.push(
      <Student
        period={i}
        ordinal__indicator={ordinal__indicator}
        name="Abhishek Yadav"
        value={present}
        onChange={setPresent}
        // onChange={val=> setPresent((present[period-1].present) = val)}
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
            dropdownOptions={classArr}
            value={classValue}
            onChange={(val) => setClassValue(val)}
          />
          <Dropdown
            title="Section"
            dropdownOptions={sectionArr}
            value={section}
            onChange={(val) => setSection(val)}
          />
          <Dropdown
            title="Month"
            dropdownOptions={monthArr}
            value={month}
            onChange={(val) => setMonth(val)}
          />
          <Dropdown
            title="Session"
            dropdownOptions={sessionArr}
            value={session}
            onChange={(val) => setSession(val)}
          />
        </div>

        <div className="attendance__date">{dateArr}</div>

        <div className="attendance__student">{periods}</div>
      </div>
    </div>
  );
}

// onChange={val => setValue(val)} - This will set the value in 'Value' that was selected earlier in the dropdown

export default Attendance;
