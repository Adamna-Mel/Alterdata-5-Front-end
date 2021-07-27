import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../pages/Login'; 

export default function Rotas(){
  return(
    <Router>
            <Switch>
                <Route path={"/login"} component={Login}/>
                <Route path={"/"} component={Principal}/>
            </Switch>
    </Router>
  );
}
    
    
