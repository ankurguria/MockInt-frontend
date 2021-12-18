import { Container, Typography, Paper, Card, CardContent, Button, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { toast } from "react-toastify";
import {Modal} from 'react-bootstrap';
import Form from '../screens/slotform/Form'
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

function InterviewTab(props) {
const classes = useStyles();
const [modalt, setModal] = useState(false);
const [intType,setIntType] = useState('');


const openModal = (e) => {
  setIntType(e.target.id);
  setModal(true);
}
const closeModal = () => {
  setModal(false);
}
    return (
        <React.Fragment >
            <div className="vertical-space" >
                <Container>
                    <div className={classes.root}>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Peer to Peer Interview</h3>
                                <Button variant="outlined" color="primary" onClick={e => openModal(e)} id="peer" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button>
                            </CardContent>
                        </Card>
                        <Card elevation={3} style={{textAlign:"center"}}>
                            <CardContent style={{marginTop:15}}>
                                <h3 style={{ fontWeight:500}}>Expert Interview</h3>
                                <Button variant="outlined" color="primary" onClick={e => openModal(e)} id= "expert" style={{borderRadius:50, paddingRight:30, paddingLeft:30}}>Book Now</Button>
                            </CardContent>
                        </Card>
                        <Modal show={modalt} onHide={closeModal} id="mymodal"  dialogClassName={"primaryModal"} size="lg" animation={false}>
                        <Modal.Header closeButton>Book Your Slot</Modal.Header>
                        <Modal.Body>
                        <Form intType={intType}/>
                        </Modal.Body>
                        </Modal>
                    </div>
                    <Typography variant="h6" component="h6" gutterBottom color="textSecondary" > Pending Requests</Typography>
                    <Container>
                        <Grid container  spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}} >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}} >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Typography variant="h6" component="h6" gutterBottom color="textSecondary" > Upcoming Interviews</Typography>
                    <Container>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}}  >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}} >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Typography variant="h6" component="h6" gutterBottom color="textSecondary" > Completed Interviews</Typography>
                    <Container>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}} >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={6}>
                                <Card elevation={3} style={{backgroundColor:"white"}} >
                                    <CardContent>
                                        <Grid container direction="row" justify="space-between" alignItems="center" >
                                            <Grid item xs={12} sm={6} >
                                                <Typography variant="h6" component="h6" > Coding Interview - Technical Round</Typography>
                                                <span> Friday, 25th January 2021</span> <br />
                                                <span> 9:00 AM - 10:00 AM</span> <br />
                                                <span style={{color: "grey"}}> Expert - Ankur Guria</span>
                                            </Grid>
                                            <Grid item container spacing={2} xs={12} sm={3} >
                                                <Grid item  xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50, }}>Book Now</Button>
                                                </Grid>
                                                <Grid item xs={6} sm={12}>
                                                    <Button variant="outlined" color="primary" style={{borderRadius:50}}>Book Now</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default InterviewTab
