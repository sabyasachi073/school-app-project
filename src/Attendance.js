import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Search from "./Search";
import "./Style/Attendance.css";
import Dropdown from "./Dropdown";
import Date from "./Date";
import Student from "./Student";

function Attendance() {
  const [classValue, setClassValue] = useState(null); // To store the selected value of Class in dropdown
  const [section, setSection] = useState(null); // To store the selected value of Section in dropdown
  const [month, setMonth] = useState(null); // To store the selected value of Month in dropdown
  const [session, setSession] = useState(null); // // To store the selected value of Session in dropdown
  const [date, setDate] = useState(0); // To store the selected value of Date in Attendence page
  const [present, setPresent] = useState([]); // To store the attendance for each period of student in Attendence page

  const totalPeriod = 8;

  // Options for the dropdown list
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

  // For date selection field
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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

  // For setting the initial values of "present" state(line 15)
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
    setPresent(createPresent); // Setting the "present" State initially
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
