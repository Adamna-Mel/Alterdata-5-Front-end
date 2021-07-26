import React from "react";
import { Link } from "react-router-dom";

import api from "../../services/api.papeis";

function Cargos() {
  const [cargos, setCargo] = React.useState([]);

  React.useEffect(() => {
    api.obterPepeis().then((res) => {
      setCargo(res);
    });
  }, []);

  return (
    <div>
      {cargos.map((e) => (
        <div key={e.id}>
          <p>{e.nome}</p>
          <Link to={`/editar/${e.id}`}>
            <button>Editar</button>
          </Link>

          <Link to={`/apagar/${e.id}`}>
            <button>apagar</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cargos;
