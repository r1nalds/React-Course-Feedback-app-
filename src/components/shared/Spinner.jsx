import React from "react";
import spinner from "../assets/Ellipsis-2.9s-600px.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "300px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
