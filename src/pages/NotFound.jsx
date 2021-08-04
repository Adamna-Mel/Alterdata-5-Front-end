import React from "react";

import notfound from "../assets/notfound.png";

import { useHistory } from "react-router-dom";

import useWindowDimensions from "../hooks/WindowDimension";

function NotFound() {
  const { height, width } = useWindowDimensions();
  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
  }, []);
  return (
    <div style={{ minHeight: height }}>
      <img style={{ display: "block", margin: "auto" }} src={notfound} />
    </div>
  );
}

export default NotFound;
