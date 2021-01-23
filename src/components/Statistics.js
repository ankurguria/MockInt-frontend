import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',

      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing(35),
        height: theme.spacing(25),
      },
    },
    
  }));


function Statistics() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="vertical-space">
                <Container textAlign="center">
                    <div className={classes.root}>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Peer to Peer Interview</h3>
                                <Button variant="outlined" color="primary" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button>
                            </CardContent>
                        </Card>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Expert Interview</h3>
                                <Button variant="outlined" color="primary" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={classes.root}>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Upcoming Interviews</h3>
                                <h4>2</h4>
                                {/* <Button variant="outlined" color="primary" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button> */}
                            </CardContent>
                        </Card>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Expert Interview</h3>
                                <Button variant="outlined" color="primary" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Statistics
