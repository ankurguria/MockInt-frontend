import { Card, CardContent, Container, Grid } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import '../assets/landingPage.css'
import { Typography, Button } from "@material-ui/core";
import Image from'../assets/images/homeImg.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


function DashBoard(props) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <NavBar isAuthenticated={props.isAuthenticated} />
            <div className="vertical-space" style={{backgroundColor:"white"}}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <Card variant="outlined" className={classes.root} style={{backgroundColor:"whitesmoke"}}>
                                <CardContent style={{textAlign:"center"}}>
                                    
                                    <Button variant="contained" color="secondary" style={{borderRadius:50, paddingRight:30, paddingLeft:30, backgroundColor: "#34c3eb"}}>Book Now It's free</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6}>
                            <Card variant="outlined" className={classes.root} style={{backgroundColor:"whitesmoke"}}>
                                <CardContent style={{textAlign:"center"}}>
                                    <Button variant="contained" color="secondary" style={{borderRadius:50, paddingRight:30, paddingLeft:30, backgroundColor: "#34c3eb"}}>Book Now</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{marginTop:50}}>
                    <Card variant="outlined" style={{backgroundColor:"whitesmoke"}}>
                        <CardContent style={{textAlign:"center"}}>
                            <Typography variant="h6" component="h6" gutterBottom color="textPrimary" style={{fontWeight: 500, marginBottom:40}}> Are you an Expert? Want to register as an Expert? </Typography>
                            
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default DashBoard
