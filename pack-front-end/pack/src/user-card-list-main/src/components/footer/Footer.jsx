import React, { Component } from "react";
import alterdata from "../../assets/1.svg"
import serratec from "../../assets/2.png"
import "./estilo.css";

class Footer extends Component {

    render(){
        return(
            <div className="main-footer">
                <div className="col">
                  <img src={alterdata} style={{width:250, height:60, marginLeft:"30%"}}/>
                  <img src={serratec} style={{width:220, height:47}}/>
                </div>
              </div>
            );
      }
    }
      
      export default Footer;