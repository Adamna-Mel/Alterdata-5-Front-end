import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

import './App.css'
import UserCard from './components/UserCard'
import TeamTitle from './components/TeamTitle'
import Nav from './components/Nav'
import TeamCard from './components/TeamCard'
import CreateTeam from './components/CreateTeam'



const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0083c1',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0083c1',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems : "center",
    margin: "auto",
  },
  app: {
    backgroundColor: "#f5f3f4",
    padding: 20,
    width: "auto%"
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
            {/* <UserCard name="Maicon" role="Visual" status="Comendo Vidro"/>
            <UserCard name="Luan" role="Interatividade" status="Compartilhando tela pra Alice"/>
            <UserCard name="Giovanne" role="Flex" status="Ocupado no Tinder"/>
            <UserCard name="Alice" role="BackEnd" status="Fazendo exame Chunin"/>
            <UserCard name="Amanda" role="BackEnd" status="Comendo Caqui"/>
            <UserCard name="Luis" role="BackEnd" status="Fugindo na Maria"/> */}
            {/* <TeamCard name="Alterdata 1"/>
            <TeamCard name="Alterdata 2"/>
            <TeamCard name="Alterdata 3"/>
            <TeamCard name="Alterdata 4"/>
            <TeamCard name="Alterdata 5"/>
            <TeamCard name="Alterdata 6"/> */}
            <CreateTeam/>
          </div>
      </div>
    </div>
  )
}

export default App
