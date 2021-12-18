import React, { Component } from 'react'
import Image from '../../assets/images/chooseexpert.jpg'
export class PeerSelection extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    mystyle = {
        position: "absolute",
         right: "10px"
      };
      mystyle1 = {
         left: "10px"
      };

    render() {
        const { values,inputChange } = this.props;

        return (

            <div className="wrap-contact100">
            <div className="contact100-pic js-tilt" data-tilt>
                <img src={Image} alt="IMG" />
            </div>
            <form className="contact100-form validate-form">
            
                <div className="radio-toolbar">
                {values.allExperts.map((expert,index) => (
                    <div key={index}>
                        <input type="radio" name="interviewType" id="exp1" onChange={inputChange('selectedExpert')} value={expert.user_id} />
                        <label for="exp1">
                        <strong><p> {expert.first_name+" "+expert.last_name} </p></strong>
                        <p> Charges : {expert.charges} ₹ </p>
                        <p> Rating : {expert.ratings} &#9733; </p>
                        <p> Current Company : {expert.current_org} </p>
                        <p> Info : {expert.expert_info}</p>
                    </label>
                <br/>
                </div>
                    ))}
                </div>
                <div>
         
       
        </div>
            </form>
            <div className="container-contact100-form-btn" style={{width:"30%"}}>
                        <button className="contact100-form-btn" onClick={this.back}>Back</button>
                    </div>
            <div className="container-contact100-form-btn" style={{width:"30%"}}>
                        <button className="contact100-form-btn" onClick={this.continue}>Continue</button>
                    </div>
                    
        </div>

        )
    }
}

export default PeerSelection
