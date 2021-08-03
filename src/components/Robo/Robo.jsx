import React, { useState } from "react";
import robo from "../../assets/3-4.png";
import "./estilo.css";

export default function Robo() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <img src={robo} onClick={toggleModal} className="robo-modal"/>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-conteudo">
            <ul className="text">
            <li>Adicione Integrantes; </li>
            <li>Crie sua Equipe; </li>
            <li>Informe o Status e Cargo dos integrantes;</li>
            <li>Filtre os integrantes;</li>
            <li>Remova Usuários</li>
            </ul>
            <button className="fechar-modal" onClick={toggleModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}