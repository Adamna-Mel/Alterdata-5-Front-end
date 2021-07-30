import React from 'react'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import avatar from "./assets/2.png"

const App = () => {
    const papercss = { padding: '25px 20px',
     width: 400, 
     margin: "30px auto", 
    }
    return (
        <Grid>
            <Paper elevation={20} style={papercss}>
                <Grid align='center'>
                    <img src={avatar}  style={{width: 100, 
                      height: 100, 
                      borderRadius: 400/ 2, 
                      borderStyle: "solid", 
                      borderColor:"purple", 
                      marginTop:-50}}/>
                    <h2 style={{fontFamily:"initial", color:"#1A2228"}}>Cadastrar Usuário</h2>
                </Grid>
                <form>
                    <TextField fullWidth label='Teste' placeholder="-" />
                    <TextField fullWidth label='Teste' placeholder="-" />
                    <TextField fullWidth label='Teste' placeholder="-" />
                    <TextField fullWidth label='Teste' placeholder="-" />
                    <TextField fullWidth label='Teste' placeholder="-" />
                    <Button type='submit' color='primary'>Cadastrar</Button>
                    <Button variant="outlined" color="secondary" style={{marginLeft:"50%"}}>
                    Voltar</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default App;