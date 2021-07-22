import React, { Component } from "react";
import robo from "../../assets/3-3.png";
import "./estilo.css";
class Robo extends Component {

    render(){
        return(
            <div className="main-image">
                <div>
                  <img src={robo} style={{width:600}}/>
                </div>
              </div>
            );
      }
    }
      
      export default Robo;