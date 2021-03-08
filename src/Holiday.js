import React from "react";
import "./Holiday.css";
import { Button } from "@material-ui/core";

function Holiday() {
  return (
    <div className="holiday">
      <div className="holiday__header">
        <div className="holiday__title">Holi Holiday</div>
        <Button>Holiday</Button>
      </div>
      <div className="holiday__description">Activate every muscle group to get the results you’ve always wanted.</div>
      <div className="holiday__date">
      15th March 2021
      </div>
    </div>
  );
}

export default Holiday;
