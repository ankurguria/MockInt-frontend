import React, { useState } from 'react'
import moment from 'moment';
import {Modal} from 'react-bootstrap';
import Feedbackform from './Feedbackform';
function InterviewCompletedCard(props) {
  const [modalg, setModalg] = useState(false);
  const [modals, setModals] = useState(false);
  const [feedback, setFeedback] = useState({});
  const openModalg = (e) => {
    setModalg(true);
  }
  const closeModalg = () => {
    setModalg(false);
  }
  const openModals = async (e) => {
    try {
      console.log(props);
      const body = {"session_id": props.session_id};
      const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/feedback/viewFeedback",{
                method:"POST",
                headers: { 'content-type': 'application/json', "token": localStorage.token },
                body: JSON.stringify(body),
            });
            console.log(await res);
            setFeedback(res.json());
    } catch (error) {
      console.log(error.message);
    }
    setModals(true);
  }
  const closeModals = () => {
    setModals(false);
  }
    console.log(props);
    return (
      <div>
            <div className="card card-success text-left" style={{backgroundColor: 'ghostwhite'}}>
              <div className="card-block " style={{paddingBottom: 20}}>
                <blockquote className="card-blockquote">
                  <h5 style={{marginBottom: 2}}>Type of Interview : {props.type_of_interview}</h5>
                  <p style={{marginBottom: 2}}>Date : {moment(Date.parse(props.slot_timestamp)).format('DD-MM-YYYY')}</p>
                  <button type="button" className="btn btn-info dash-btn" onClick={e => openModalg(e)}>Give Feedback</button>
                  <button type="button" className="btn btn-success dash-btn" onClick={e => openModals(e)} style={{marginRight:7}}>View Feedback</button>
                  <p style={{marginBottom: 2}}>Time : {moment(Date.parse(props.slot_timestamp)).format('h : mm a')}</p>
                  <p >{props.is_expert_interview ? "Expert Name" : "Peer Name"} : {props.first_name} {props.last_name}</p>
                </blockquote>
              </div>
            </div>
            <Modal show={modalg} onHide={closeModalg} id="mymodal"  dialogClassName={"primaryModal"} style={{marginTop:'50px'}} size="lg" animation={false}>
          <Modal.Header closeButton style={{float:"left"}}></Modal.Header>
          <Modal.Body closeButton>
          <Feedbackform session_id={props.session_id} closeModalg={closeModalg}/>
          </Modal.Body>
          </Modal>
          <Modal show={modals} onHide={closeModals} id="mymodal"  dialogClassName={"primaryModal"} style={{marginTop:'50px'}} size="lg" animation={false}>
          <Modal.Header closeButton><h5><strong>Feedback For You</strong></h5></Modal.Header>
          <Modal.Body>
          <h2> Feedback For You</h2>
          <h5>Comments : {feedback.feedback}</h5>
          <h5> Overall Score: {feedback.overall_score}</h5>
          </Modal.Body>
          </Modal>
            </div>
    )
}

export default InterviewCompletedCard;




