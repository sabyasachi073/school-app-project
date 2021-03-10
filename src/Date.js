import React from "react";
import "./Date.css";

function Date({ date, day, value, onChange }) {
  return (
    <div
      className={`date__container ${value === date ? "selected" : null}`}
      onClick={() => onChange(date)}
    >
      <div className="date">{date}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export default Date;
