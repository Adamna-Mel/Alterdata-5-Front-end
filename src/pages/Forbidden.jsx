import React from "react";

import forbidden from "../assets/forbidden.png";

import { useHistory } from "react-router-dom";

import useWindowDimensions from "../hooks/WindowDimension";

function Forbidden() {
  const { height, width } = useWindowDimensions();

  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
  }, []);
  return (
    <div style={{ minHeight: height }}>
      <img style={{ display: "block", margin: "auto" }} src={forbidden} />
    </div>
  );
}

export default Forbidden;
