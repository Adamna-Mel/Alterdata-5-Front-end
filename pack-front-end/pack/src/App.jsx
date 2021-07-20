import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import './App.css'
import UserCard from './components/UserCard'

const useStyles = makeStyles({
  card: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  app: {
    flex: 1,
    display: "flex",
    alignSelf: "center",
    backgroundColor: "#f5f3f4",
    padding: 20,
    alignItems: "center"
  }
});

function App() {
  
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <header className="App-header">
        <h1 style={{textAlign:"center"}}>Teste</h1>
        <div className={classes.card}>
          <UserCard nome="Maicon" role="Visual" icon={CoffeeCup}/><UserCard nome="Luan" role="Interatividade" icon="CoffeeCup"/><UserCard nome="Giovanne" role="Flex" icon="Merge"/>
        </div>
      </header>
    </div>
  )
}

export default App
