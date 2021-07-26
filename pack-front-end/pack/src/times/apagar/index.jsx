import React from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api.times";

function ApagarTime() {
  const { id } = useParams();

  const handleClick = () => {
    api.apagarTime(id);
  };
  return (
    <div>
      <button onClick={handleClick}>Apagar</button>
    </div>
  );
}

export default ApagarTime;
