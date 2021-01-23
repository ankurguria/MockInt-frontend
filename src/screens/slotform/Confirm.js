import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        let timestamp= this.props.values.date+"T"+this.props.values.time+'+00:00';
        const url ="https://mockinterviewplatform.herokuapp.com/api/slotbooking/book_now";
        let data ;
        console.log(this.props.values.interviewFor);
        if(this.props.values.interviewFor==="expert"){
            data={       
                "is_expert_interview" : true,
                "interviewer_id" : this.props.values.selectedExpert,
                "type_of_interview": this.props.values.interviewType,
                "preferred_slot": timestamp
            };
        } else
        {
            data={
                "is_expert_interview" : false,
                "interviewer_id" : null,
                "type_of_interview": this.props.values.interviewType,
                "preferred_slot": timestamp
            }
        }
        console.log(data);
        fetch(url, { method: "POST", // or ‘PUT’
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'content-type': 'application/json',token: localStorage.token} })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => this.props.stateChange('peerMatched',response.status)); 
        this.props.nextStep();
    };


    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
        
    };
    mystyle = {
        position: "absolute",
         right: "50px"
      };
      mystyle1 = {
         left: "10px"
      };
    render() {
        const {
            values: { interviewType, date, time, selectedExpert,interviewFor }
        } = this.props;

        return (
            <div className="form-container">
              <center>  <h1 className="mb-5">Confirm</h1> </center>
              
                <ul className="list-group">
                  <h4> <strong> <li className="list-group-item">Interview Type : {interviewType}</li></strong></h4>
                  <h4> <strong>  <li className="list-group-item">Date : {date}</li> </strong></h4>
                  <h4> <strong>  <li className="list-group-item">Time : {time}</li></strong></h4>
                  <h4> <strong> <li className="list-group-item">interviewFor : {interviewFor}</li></strong></h4>
                </ul>

                <br /><br />

                <div className="container-contact100-form-btn" style={{maxWidth:200, float:"right"}}>
                        <button className="contact100-form-btn" onClick={this.continue}>Proceed</button>
                    </div>
                    <div className="container-contact100-form-btn" style={{maxWidth:200}}>
                        <button className="contact100-form-btn" onClick={this.back}>Back</button>
                    </div>
            </div>
        )
    }
}

export default Confirm
