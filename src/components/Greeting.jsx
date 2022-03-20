import React from "react";

import Date from "./Date";

var greeting;

var customStyle = {
  color: ""
};

function Greeting() {
  if (Date < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (Date < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {" "}
      {greeting}
    </h1>
  );
}

export default Greeting;
