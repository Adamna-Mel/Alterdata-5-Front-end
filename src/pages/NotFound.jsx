import React from "react";

import notfound from "../assets/notfound.png";

import useWindowDimensions from "../hooks/WindowDimension";

function NotFound() {
  const { height, width } = useWindowDimensions();
  return (
    <div style={{ minHeight: height }}>
      <img style={{ display: "block", margin: "auto" }} src={notfound} />
    </div>
  );
}

export default NotFound;
