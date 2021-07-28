import React, { useState } from "react";

//MATERIAL-UI
import { ClickAwayListener } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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
        <TextField
          className={props.className}
          id="filled-required"
          label="Status"
          defaultValue=""
          onKeyDown={handleKeyDown}
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          type="text"
          size="small"
          style={{ marginBottom: 27 }}
        />
      ) : (
        <div
          className={props.className}
          onClick={() => {
            setCondicao(true);
          }}
        >
          <div style={{ marginBottom: 50 }}>{status}</div>
        </div>
      )}
    </ClickAwayListener>
  );
}
