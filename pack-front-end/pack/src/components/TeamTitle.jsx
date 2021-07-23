import React from 'react';

import SvgColor from 'react-svg-color';
import { makeStyles } from '@material-ui/core/styles';

import TeamOptions from './TeamOptions'

import FireExtinguisher from '../assets/icons/fire-extinguisher.svg';
import Hades from '../assets/icons/hades.svg';
import SharkBite from '../assets/icons/shark-bite.svg'
import Sly from '../assets/icons/sly.svg';

const useStyles = makeStyles({
    namebox: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: 90,
        width: "auto",
        textAlign: "center",
        margin: "auto",
    },
    teamName: {
        flex: 1,
        display: "flex",
        fontSize: 30,
        fontWeight: "bold",
        width: "auto",
        textAlign: "auto",
        margin: "auto",
        marginLeft: 20,
    },
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        verticalAlign: "center",
        width: "auto",
        maxWidth: 350,
        margin: "auto",
        textAlign: "center",
    },
    teamOptions:{
        marginTop: 22,
    }
});

function TeamTitle(props){

    const classes = useStyles();

    const [primaryColor, setPrimaryColor] = React.useState("#000000");
    const [secondaryColor, setSecondaryColor] = React.useState("#FFFFFF");


    return(
        <div className={classes.container}>
            <div>
                <SvgColor svg={SharkBite} width={90} colors={[primaryColor, 
                secondaryColor]} />
            </div>
            <div className={classes.namebox}>
                <h1 className={classes.teamName}>{props.team}</h1>
                <div className={classes.teamOptions}>
                    <TeamOptions/>
                </div>
            </div>
            {/* <button onClick={() => {setSecondaryColor("#34eb92")}}>teste</button>
            <button onClick={() => {setPrimaryColor("#FFFFFF")}}>teste2</button> */}
        </div>
    )
}
export default TeamTitle;