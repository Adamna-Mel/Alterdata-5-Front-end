import React from 'react';

import SvgColor from 'react-svg-color';
import { makeStyles } from '@material-ui/core/styles';


import FireExtinguisher from '../assets/icons/fire-extinguisher.svg';
import Hades from '../assets/icons/hades.svg';

const useStyles = makeStyles({
    namebox: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        verticalAlign: "center",
        height: 90,
        width: 200,
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
    },
    container:{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        verticalAlign: "center",
        width: 250,
        margin: "auto",
        textAlign: "center"
    }
});

function TeamTitle(props){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <div className={classes.namebox}>
                <h1 className={classes.teamName}>{props.team}</h1>
            </div>
            <div>
                <SvgColor svg={FireExtinguisher} width={90} colors={["#0083C1", "#000000"]} />
            </div>
        </div>
    )
}
export default TeamTitle;