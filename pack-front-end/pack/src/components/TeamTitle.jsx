import React from 'react';

import SvgColor from 'react-svg-color';
import { makeStyles } from '@material-ui/core/styles';


import FireExtinguisher from '../assets/icons/fire-extinguisher.svg';
import Hades from '../assets/icons/hades.svg';

const useStyles = makeStyles({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        verticalAlign: "center",
        backgroundColor: "#cccccc",
        height: 80,
        width: 400,
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
});

function TeamTitle(props){
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <h1 className={classes.teamName}>{props.team}</h1>
                    <SvgColor svg={Hades} width={80} colors={["#0083C1", "#000000"]} />
        </div>
    )
}
export default TeamTitle;