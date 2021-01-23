import React from 'react'
import moment from 'moment'
function PendingRequestCard(props) {
    
    const acceptRequest = async e =>{
        //e.preventDefault();
        try{
            console.log(props.schedule_id);
            let body = {"schedule_id":props.schedule_id}
            console.log(JSON.stringify(body));
            const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/slotbooking/accept",{
                method:"POST",
                headers: { 'content-type': 'application/json', "token": localStorage.token },
                body: JSON.stringify(body)
            });
            console.log(res);
        }catch(err){
            console.log(err.message);
        }


    }

    const rejectRequest = async e =>{
        //e.preventDefault();
        try{
            const body = {"schedule_id":props.schedule_id}
            const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/slotbooking/reject",{
                method:"POST",
                headers: { 'content-type': 'application/json', "token": localStorage.token },
                body: JSON.stringify(body),
            });
            console.log(res);
        }catch(err){
            console.log(err.message);
        }


    }

    console.log(props);
    return (
        <div className="card card-success text-left" style={{backgroundColor: 'ghostwhite'}}>
            <div className="card-block " style={{paddingBottom: 0}}>
              <blockquote className="card-blockquote">
                <h5 style={{marginBottom: 2}}>Type of Interview : {props.interview_type}</h5>
                <p style={{marginBottom: 2}}>Date : 20-01-2020</p>
                <button type="button" onClick={e=>{rejectRequest(e)}} className="btn btn-danger dash-btn">Reject</button>
                <button type="button" onClick={e=> acceptRequest(e)} className="btn btn-success dash-btn">Approve</button>
                
                <p style={{marginBottom: 2}}>Time : {moment(Date.parse(props.preferred_slot)).format('hh:mm a')}</p>
                <p >Interviewee Name : {props.user_id}</p>
              </blockquote>
            </div>
          </div>
    )
}

export default PendingRequestCard
