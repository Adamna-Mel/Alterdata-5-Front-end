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
          multiline
          rows={3}
          inputProps={{ maxLength: 140 }}
          style={{ marginBottom: 10 }}
        />
      ) : (
        <div
          className={props.className}
          onClick={() => {
            setCondicao(true);
          }}
        >
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
            multiline
            defaultValue={status}
            rows={3}
            inputProps={{ maxLength: 140 }}
            style={{ marginBottom: 10 }}
          />
        </div>
      )}
    </ClickAwayListener>
  );
}
