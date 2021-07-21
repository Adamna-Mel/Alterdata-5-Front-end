import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import './App.css'
import UserCard from './components/UserCard'
import TeamTitle from './components/TeamTitle'
import Nav from './components/Nav'

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf : "center",
    margin: "auto"
    
  },
  app: {
    backgroundColor: "#f5f3f4",
    padding: 20,
  },
  header: {
    textAlign: "center",
    bottomMargin: 10
  },
  teamName: {
    alignSelf: "center",
  }
});

function App() {
  
  const classes = useStyles();
  return (
    <div>
    <Nav/>
      <div className={classes.app}>
        <header className={classes.header}>
            <TeamTitle className={classes.teamName} team="Alterdata 5"/>
        </header>
          <div className={classes.card}>
            <UserCard name="Maicon" role="Visual"/><UserCard name="Luan" role="Interatividade" icon="CoffeeCup"/><UserCard name="Giovanne" role="Flex" icon="Merge"/>
          </div>
      </div>
    </div>
  )
}

export default App
