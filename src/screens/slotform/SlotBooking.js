import React, { Component } from 'react';
import '../../assets/slotmain.css';
import Image from '../../assets/images/slot.jpg';
export class SlotBooking extends Component {   
   
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    
    render() {
        const { values, inputChange } = this.props;
      
        return (
            <div className="wrap-contact100">
            <div className="contact100-pic js-tilt" data-tilt>
                <img src={Image} alt="IMG" />
            </div>

            <form className="contact100-form1 validate-form">
                <input type="date" id="start" 
                name="date"
                required
                value={values.date}
                min="2021-01-06" 
                max="2022-01-01"
                onChange={inputChange('date') } 
            />
                <br />
                <div className="radio-toolbar slot" >
                    <div className="row">
                        <div className="col-6">
                    <input type="radio" name="time" id="9am" onChange={inputChange('time')} value='09:00:00'/>
                        <label className= "lab2" htmlFor="9am">
                            <span>09:00 AM</span>
                        </label>
                        </div>
                        <div className="col-6">
                        <input type="radio" name="time" id="10am" onChange={inputChange('time')} value='10:00:00'/>
                        <label className= "lab2" htmlFor="10am">	
                            <span>10:00 AM</span>
                        </label> 
                    </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                        <input type="radio" name="time" id="11am" onChange={inputChange('time')} value='11:00:00'/>
                        <label className= "lab2" htmlFor="11am">
                            <span>11:00 AM</span>
                        </label>
                        </div>
                        <div className="col-6">
                        <input type="radio" name="time" id="4pm" onChange={inputChange('time')} value='16:00:00'/>
                        <label className= "lab2" htmlFor="4pm">	
                            <span>04:00 PM</span>
                        </label>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                        <input type="radio" name="time" id="5pm" onChange={inputChange('time')} value='17:00:00'/>
                        <label className= "lab2" htmlFor="5pm">
                            <span>05:00 PM</span>
                        </label>
                    </div>
                    <div className="col-6">
                        <input type="radio" name="time" id="6pm" onChange={inputChange('time')} value='18:00:00'/>
                        <label className= "lab2" htmlFor="6pm">	
                            <span>06:00 PM</span>
                        </label>
                        </div></div>
                </div>

                
                
               
                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" onClick={this.continue}>Continue</button>
                    </div>
                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" onClick={this.back}>Back</button>
                    </div>
                
            </form>
        </div>
        )
    }
    getStringDate(today)
    {
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
        let yyyy = today.getFullYear();
        if(dd<10){
        dd='0'+dd
        } 
        if(mm<10){
        mm='0'+mm
        } 

        let strDate = yyyy+'-'+mm+'-'+dd;
        return strDate;
    }
    componentDidMount() {
        // Use Javascript
                let today = new Date();
                let minDate= this.getStringDate(today);
                document.getElementById("start").setAttribute("min", minDate);
                today.setDate(today.getDate() + 7);
                let maxdate = this.getStringDate(today);
                document.getElementById("start").setAttribute("max", maxdate);
        }
}

export default SlotBooking
