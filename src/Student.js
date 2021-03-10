import React, { useState } from "react";
import "./Student.css";
import { Button } from "@material-ui/core";

function Student({ period, ordinal__indicator, name, value, onChange }) {
  const [presentValue, setPresentValue] = useState(false); // State to moniter and store the value(Present/Absent) selected by the user

  // Assigns the selected value to the main "present" state in Atendance.js
  function handleClick() {
    onChange(prev => [
      ...prev,
      value[(period-1)].present = presentValue
    ]);
  }

  return (
    <div className="student__container">
      <div className="student">
        <div className="period">
          <div className="period__number">{`${
            period < 10 ? "0" : ""
          }${period}${ordinal__indicator}`}</div>
          <p>Period</p>
        </div>
        <div className="student__name">{name}</div>
        <div className="student__attendance">
          <Button
            className={`student__present student__attendanceButton ${
              presentValue ? "selected" : ""
            }`}
            onClick={() => {
              setPresentValue(true);
              handleClick();
            }}
          >
            Present
          </Button>
          <Button
            className={`student__absent student__attendanceButton ${
              presentValue ? "" : "selected"
            }`}
            onClick={() => {
              setPresentValue(false);
              handleClick();
            }}
          >
            Absent
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Student;
