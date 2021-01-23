import React, { useState } from 'react'
import moment from 'moment';

function InterviewUpcomingCard(props) {
  const [vis, setVis] = useState('');
  const cancelInterview = async e =>{
  // e.preventDefault();
   console.log(props.session_id);
    try{
      console.log(props);
        const body = {"session_id":props.session_id, "is_expert_interview": props.is_expert_interview}
        const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/slotbooking/cancelinterview",{
            method: "POST",
            headers: {'content-type': 'application/json', token: localStorage.token },
            body: JSON.stringify(body)
        });
        console.log(res);
    }catch(err){
        console.log(err.message);
    }

   // setVis('none');

}
    console.log(props);
    return (
            <div className="card card-success text-left" style={{backgroundColor: 'ghostwhite', display:{vis}}}>
              <div className="card-block " style={{paddingBottom: -100}}>
                <blockquote className="card-blockquote">
                  <h5 style={{marginBottom: 2}}>Type of Interview : {props.type_of_interview}</h5>
                  <p style={{marginBottom: 2}}>Date : {moment(Date.parse(props.slot_timestamp)).format('DD-MM-YYYY')}</p>
                  <button type="button" onClick={e=>cancelInterview(e)} className="btn btn-danger dash-btn">Cancel</button>
                  <p style={{marginBottom: 2}}>Time : {moment(Date.parse(props.slot_timestamp)).format('h : mm a')}</p>
                  <p >{props.is_expert_interview ? "Expert Name" : "Peer Name"} : {props.first_name} {props.last_name}</p>
                </blockquote>
              </div>
            </div>
    )
}

export default InterviewUpcomingCard;




