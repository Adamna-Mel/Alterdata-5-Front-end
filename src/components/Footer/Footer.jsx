import React, { Component } from "react";

//ASSETS
import alterdata from "../../assets/alterdata.svg";
import serratec from "../../assets/serratec.png";

//ESTILO
import "./estilo.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="logos">
          <img src={alterdata} style={{ height: 60 }} />
          <img
            src={serratec}
            style={{ height: 40, marginLeft: 30, marginBottom: 11 }}
          />
        </div>
      </div>
    );
  }
}

export default Footer;
