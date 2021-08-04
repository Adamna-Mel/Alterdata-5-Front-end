import React from "react";

import forbidden from "../assets/forbidden.png";

import useWindowDimensions from "../hooks/WindowDimension";

function Forbidden() {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ minHeight: height }}>
      <img style={{ display: "block", margin: "auto" }} src={forbidden} />
    </div>
  );
}

export default Forbidden;
