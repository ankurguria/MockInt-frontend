import { Card, CardContent, Container, Grid } from '@material-ui/core';
import React from 'react';
import NavBar from '../components/NavBar';
import '../assets/landingPage.css'
import { Typography, Button } from "@material-ui/core";
import Image from'../assets/images/homeImg.png';
import { makeStyles } from '@material-ui/core/styles';
//import Register from '../components/Register'

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


function LandingPage(props) {
    console.log(props);
    const classes = useStyles();
    const handleSignupClick = (event) => {
        props.setExpert(true);
        window.location.href='/register';
      }


    return (
        
        <React.Fragment>
            <NavBar {...props}/>
            <div className="home-header vertical-space">
                <Container>
                    <Grid container>
                        <Grid item lg={6}>
                            <div id="home-slogan">
                                {/* <h1 className="white">Make YourNext Interview<br /> */}
                                <Typography  variant="h2" component="h2" gutterBottom> Make Your Next Interview </Typography>
                                {/* <span className="bolder">A perfect One</span> */}
                                <Typography variant="h1" component="h4" gutterBottom> A Perfect One</Typography>
                                <p className="white vertical-space" style={{fontSize:20}}>Make the Best use of our Platform to get ready for any Interview.</p>
                                
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                        <img src={Image} alt="" className="img-header"></img>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="vertical-space" style={{backgroundColor:"white"}}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item lg={6}>
                            <Card variant="outlined" className={classes.root} style={{backgroundColor:"whitesmoke"}}>
                                <CardContent style={{textAlign:"center"}}>
                                    <Typography variant="h4" component="h5" gutterBottom color="textPrimary" style={{fontWeight:500}}> Peer to Peer Interview </Typography>
                                    <p style={{marginTop:30, marginLeft:20, marginRight: 20, marginBottom: 30, fontSize: 15}}>Practice with people just like you.<br/>You and your peer will interview each other for 30-40 mins.<br/>You'll each provide feedback to each other.</p>
                                    <Button variant="contained" color="secondary" onClick={event =>  window.location.href='/register'} style={{borderRadius:50, paddingRight:30,fontSize:15 , paddingLeft:30, backgroundColor: "#34c3eb"}}>Book Now It's free</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={6}>
                            <Card variant="outlined" className={classes.root} style={{backgroundColor:"whitesmoke"}}>
                                <CardContent style={{textAlign:"center"}}>
                                    <Typography variant="h4" component="h5" gutterBottom color="textPrimary" style={{fontWeight:500}}> Expert Interview</Typography>
                                    <p style={{marginTop:30, marginLeft:20, marginRight: 20, marginBottom: 30, fontSize: 15}}>Get Invaluable Insights from the very best.<br/>Domain Expert will interview you for 30-40 mins,<br/>then give feedback and guidance to be better. </p>
                                    <Button variant="contained" color="secondary" onClick={event =>  window.location.href='/register'} style={{borderRadius:50,fontSize:15 ,  paddingRight:30, paddingLeft:30, backgroundColor: "#34c3eb"}}>Book Now</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container style={{marginTop:50}}>
                    <Card variant="outlined" style={{backgroundColor:"whitesmoke"}}>
                        <CardContent style={{textAlign:"center"}}>
                            <Typography variant="h6" component="h6" gutterBottom color="textPrimary" style={{fontWeight: 500, fontSize: 20, marginBottom:40}}> Are you an Expert? Want to register as an Expert? </Typography>
                            <Button variant="contained" color="secondary" onClick={event => handleSignupClick(event)} style={{borderRadius:50, paddingRight:30, paddingLeft:30, fontSize:15 ,backgroundColor: "#e534eb"}}>Register Now</Button>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
                
            
    );
}

export default LandingPage;