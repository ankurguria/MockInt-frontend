import React, { useEffect, useState } from "react";
import '../assets/modal.css'
import {Button,Modal} from 'react-bootstrap';
import Form from '../screens/slotform/Form';
import NavBar from '../components/NavBar';
import '../assets/dashstyle.css';
import '../assets/bootstrapt.min.css';
import { ImportantDevices } from "@material-ui/icons";
import InterviewUpcomingCard from './InterviewUpcomingCard';
import InterviewCompletedCard from './InterviewCompletedCard.js';
import PendingRequestCard from "./PendingRequestCard";
import Profile from './Profile';
const Dashboard = (props) => {
  const [data, setData] = useState({requested_interviews:[],upcoming_interviews:[], completed_interviews:[]});
  const [modalt, setModal] = useState(false);
  const [intType,setIntType] = useState('');
  const [modalp, setModalp] = useState(false);
 
  const openModal = (e) => {
    setIntType(e.target.id);
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }
  const getProfile = async () => {
    try {
      const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/dashboard", {
        method: "GET",
        headers: { "token": localStorage.token }
      });

      const parseData = await res.json();
      setData(parseData);
      console.log(data);
      
    } catch (err) {
      console.error(err.message);
    }
  };
  const openModalp = (e) => {
    setModalp(true);
  }
  const closeModalp = () => {
    setModalp(false);
  }
  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      props.setAuth(false);
      // toast.success("Logout successfully");

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
    
  }, []);

 
  // let expertcard;
  // if(props.isExpert)
  // {
  //   expertcard=
  // }else{
  //   expertcard =<p></p>;
  // }

  return (
    <div>
     <NavBar {...props} first_name={data.first_name} last_name={data.last_name} />
     <div className="container-fluid" id="main">
    <div className="row row-offcanvas row-offcanvas-left">
      <div className="col-md-3 col-lg-2 sidebar-offcanvas" id="sidebar" role="navigation">
        
          <div className="card card-inverse cardsuccess" style={{marginTop: 125}} >
            <div className="card-block " style={{backgroundColor:"rgb(47, 108, 201)"}}>
              <h6 className="text-center"> Welcome <span className="text-uppercase">{data.first_name} !</span></h6>
           
              { data.is_expert && <div> <hr/> <center> <button type="button" className="btn btn-info" onClick={e => openModalp(e)} style={{color:"white", textAlign:'center', borderRadius:"20px"}}>Update Profile</button></center>
             </div>}
             
             <hr/>
            <center> <button type="button" className="btn btn-info" onClick={e => logout(e)} style={{color:"white", textAlign:'center', borderRadius:"20px"}}>Sign Out</button></center>
            </div>
          </div>
      </div>
      <Modal show={modalp} onHide={closeModalp} id="mymodal"  dialogClassName={"primaryModal"} style={{marginTop:'50px'}} size="lg" animation={false}>
          <Modal.Header closeButton style={{float:"left"}}></Modal.Header>
          <Modal.Body closeButton>
          <Profile closeModalp={closeModalp}/>
          </Modal.Body>
          </Modal>
      

      <div className="col-md-9 col-lg-10 main">
      <h3><strong> Welcome <span className="text-uppercase">{data.first_name} !</span> </strong></h3>
        <div className="row mb-3">
          
          <div className="col-xl-4 col-lg-4" style={{width:"500px", marginLeft:50}} >
          
            <div className="card card-inverse" style={{backgroundColor: '#4169E1', height:120}}>
              <div className="card-block">
                <div className="rotate">
                  <i className="fa fa-user fa-5x"></i>
                </div>
                <h4 className="text-uppercase" style={{color:"white"}} ><strong><center> Peer to Peer Interview</center></strong></h4>
                <br/>
                <center><button type="button" onClick={e => openModal(e)} id="peer" className="btn btn-info" style={{margin:10}}>Book Now</button> </center>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4" style={{width:500,marginLeft:50}}>
            <div className="card card-inverse " style={{backgroundColor: '#4169E1', height:120}}>
              <div className="card-block ">
                <div className="rotate">
                  <i className="fa fa-list fa-4x"></i>
                </div>
                <h4 className="text-uppercase" style={{color:"white"}}> <center><strong>Expert Interview</strong></center></h4><br/>
                <center><button type="button" onClick={e => openModal(e)} id= "expert" className="btn btn-info" style={{margin:10}}>Book Now</button> </center>
              </div>
            </div>
          </div>
         </div>
        
        {data.is_expert?(
            <div> <h2 className="sub-header">Pending Requests..</h2>
              <div className="card-deck-wrapper mb-4 ">
                <div className="card-deck" style={{maxWidth:800}}>
                  {data.requested_interviews.map((obj,index)=>(<PendingRequestCard {...obj} key={index} />))}
                </div>
              </div>
            </div>
        ):""}
        
          <div className="col-lg-3 col-md-4" style={{float: "right", right:10}}>
            <div className="card card-inverse mt-3" style={{backgroundColor: "#4169E1"}}>
              <div className="card-block">
                <center> <h3 className="card-title">Upcoming Interviews</h3></center>
                <center><h4 className="card-title">{data.upcoming_interviews.length}</h4></center>
                
              </div>
            </div>

            <div className="card card-inverse mt-3" style={{backgroundColor: "#4169E1"}}>
              <div className="card-block">
                <center> <h3 className="card-title">Completed Interviews</h3></center>
                <center><h4 className="card-title">{data.completed_interviews.length}</h4></center>
              </div>
            </div>
            <div className="card card-inverse mt-3" style={{backgroundColor: '#4169E1'}}>
              <div className="card-block">
                <center> <h3 className="card-title">Total Interviews</h3></center>
                <center><h4 className="card-title">{data.upcoming_interviews.length + data.completed_interviews.length}</h4></center>
              </div>
            </div>

          </div>
          
        
        
        
        <a id="more"></a>
        <hr/>
        <h2 className="sub-header">Upcoming Interviews..</h2>
        <div className="card-deck-wrapper mb-4 ">
          <div className="card-deck" style={{maxWidth:800}}>
            {/* <InterviewUpcomingCard {...data}/> */}
            {/* {handleUpcomingCards()} */}
            {data.upcoming_interviews.map((obj, index) => (<InterviewUpcomingCard {...obj} key={index}/>))}
          </div>
      </div>
       
        <h2>Completed Interviews </h2>
        <div className="card-deck-wrapper mb-3 ">
          <div className="card-deck" style={{maxWidth:800}}>
          {/* <InterviewCompletedCard {...data}/> */}
          {data.completed_interviews.map((obj, index) => (<InterviewCompletedCard {...obj} key={index}/>))}
          </div>
      </div>
    
    </div>
    <Modal show={modalt} onHide={closeModal} id="mymodal"  dialogClassName={"primaryModal"} style={{marginTop:'50px'}} size="lg"  animation={false}>
    <Modal.Header closeButton style={{float:"left"}}></Modal.Header>
          <Modal.Body >
          <Form intType={intType}/>
          </Modal.Body>
          </Modal>
  </div>




    {/*
      <button onClick={e => logout(e)} className="btn btn-primary">
        Logout
      </button>
      <br/> <br/>
      <div>
      <Button onClick={e => openModal(e)} id="peer">Slot Book For Peer</Button>
      <Button onClick={e => openModal(e)} id= "expert">Slot Book For Expert</Button>
          <Modal show={modalt} onHide={closeModal} id="mymodal"  dialogClassName={"primaryModal"} style={{marginTop:'50px'}} size="lg" animation={false}>
          <Modal.Header closeButton><h5><strong>Book Your Slot</strong></h5></Modal.Header>
          <Modal.Body>
          <Form intType={intType}/>
          </Modal.Body>
          </Modal>
    </div>*/}
    </div>
    </div>
  );
};

export default Dashboard;