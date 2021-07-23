import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SvgColor from 'react-svg-color';

//Icones
import CrystalShine from '../assets/icons/crystal-shine.svg';
import CoffeeCup from '../assets/icons/coffee-cup.svg';
import Merge from '../assets/icons/merge.svg';
import FireExtinguisher from '../assets/icons/fire-extinguisher.svg';

import CardOptions from './CardOptions'

const useStyles = makeStyles({
    card: {
        borderRadius: 20,
        width: 300,
        height: 100,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#FFFFFF",
    },
    teamName: {
        fontSize: 35,
        color: "#000000",
        textAlign: "center",
        marginTop: 10,
        marginLeft: 5
    },
    userStatus: {
        fontSize: 15,
        color: "#1A2228",
        textAlign: "center"
    },
    profileImage: {
        height: 100,
        width: 100,
    },
    cardContent: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
});

function TeamCard(props) {
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>            
                <SvgColor 
                        svg={CoffeeCup} 
                        width={65} 
                        colors={["#0083C1"]}
                    />
                <Typography className={classes.teamName}>
                    <span>{props.name}</span>
                </Typography>
            </CardContent>
        </Card>
        </div>
    )

}
export default TeamCard