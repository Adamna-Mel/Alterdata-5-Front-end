import React, { useState } from "react";

//MATERIAL-UI
import { ClickAwayListener } from "@material-ui/core";

//SERVICES
import apiUsuarios from "../../services/api.usuarios";

export default function StatusBar(props) {
  const [condicao, setCondicao] = useState(false);
  const [status, setStatus] = useState(props.status);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClickAway();
  };
  const handleClickAway = () => {
    setCondicao(false);
    apiUsuarios.editarStatus(props.id, { status });
  };
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      {condicao ? (
        <input
          className={props.className}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
      ) : (
        <div
          className={props.className}
          onClick={() => {
            setCondicao(true);
          }}
        >
          {status}
        </div>
      )}
    </ClickAwayListener>
  );
}
