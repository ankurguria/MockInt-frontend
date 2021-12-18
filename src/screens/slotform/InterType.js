import React, { Component } from 'react';
import '../../assets/slotmain.css';
import '../../assets/loginutil.css';
import Image from '../../assets/images/interviewtype.jpg';
export class InterType extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {  inputChange } = this.props;

        return (
       
			<div className="wrap-contact100">
            <div className="contact100-pic js-tilt" data-tilt>
                <img src={Image} alt="IMG" />
            </div>

            <form className="contact100-form validate-form">
            
                <div className="radio-toolbar">
                    <input type="radio" name="interviewType" id="tech" onChange={inputChange('interviewType')} value='Technical' required/>
                    <label htmlFor="tech">Technical Interview.</label>
                <br/>
                    <input type="radio" name="interviewType" id="hr" onChange={inputChange('interviewType')} value='Behavioural' required/>
                    <label htmlFor="hr">Behavioral Interview</label>
                </div>
                <br />
                
                <div className="container-contact100-form-btn">
                    <button className="contact100-form-btn" onClick={this.continue}>Continue</button>
                </div>
            </form>
        </div>
        )
    }
}

export default InterType
