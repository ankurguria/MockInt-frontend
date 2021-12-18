import React, { Component } from 'react';
import { toast } from "react-toastify";
import { DropdownButton,Dropdown } from 'react-bootstrap';

import '../assets/feedbackstyle.css';
export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { current_org: '', 
        expert_in_field: "",
        expert_info:"",
        charges: '',
        preferred_slot_1:"Preferred Slot 1",
        preferred_slot_2:"Preferred Slot 2",
        preferred_slot_3:"Preferred Slot 3"
    };
   
      }
      handleSelect = input => e => {
        this.setState({
           [input]: e
        });
    };
   
      mySubmitHandler = async (event) => {
        event.preventDefault();
        const url ="https://mockinterviewplatform.herokuapp.com/api/auth/expert_profile_creation";
        const data = {
        "current_org": this.state.current_org,
        "expert_in_field": this.state.expert_in_field,
        "charges": this.state.charges,
        "expert_info": this.state.expert_info,
        "preferred_slot_1":this.state.preferred_slot_1,
        "preferred_slot_2":this.state.preferred_slot_2,
        "preferred_slot_3":this.state.preferred_slot_3
    }
        console.log(data);
        fetch(url, { method: "POST", // or ‘PUT’
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'content-type': 'application/json',token: localStorage.token} })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log(response)); 
        toast.warn('🦄 Profile Saved Successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        this.props.closeModalp();
      }
      myChangeHandler = input => e => {
          
        this.setState({
            [input]: e.target.value
        });
    };
    render() {
        return (
            <div className="container contact-form" >
            <center>
            <form onSubmit={this.mySubmitHandler} className="myform" >
                <h3>Profile</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" onChange={this.myChangeHandler('current_org')} placeholder="Current Org" value={this.state.current_org} style={{width: "100%", height: "100px"}} required/>
                        </div>
                        <div className="form-group">
                        <input type="text" name="txtName" className="form-control" onChange={this.myChangeHandler('charges')} placeholder="Charges" value={this.state.charges} style={{width: "100%", height: "100px"}} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" onChange={this.myChangeHandler('expert_in_field')} placeholder="Your Expertise" value={this.state.expert_in_field} style={{width: "100%", height: "100px"}} required/>
                        </div>
                        <center>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-primary btnContact" value="Save Profile" required />
                        </div>
                    </center>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" value={this.state.expert_info} onChange={this.myChangeHandler('expert_info')} placeholder="Your Bio *" style={{width: "500px", height: "150px"}} required></textarea>
                        </div>
                        <div>
                        <DropdownButton id="dropdown-basic-button" title={this.state.preferred_slot_1} size="lg" variant="info"  onSelect={this.handleSelect("preferred_slot_1")} required>
                            <Dropdown.Item eventKey="09:00" required>09:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="10:00" required>10:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="11:00" required>11:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="16:00" required>04:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="17:00" required>05:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="18:00" required>06:00 PM</Dropdown.Item>
                            </DropdownButton>
                            <br/> <br/> <br/>
                            <DropdownButton id="dropdown-basic-button" title={this.state.preferred_slot_2} size="lg" variant="info" onSelect={this.handleSelect("preferred_slot_2")} required>
                            <Dropdown.Item eventKey="09:00" >09:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="10:00" >10:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="11:00" >11:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="16:00" >04:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="17:00" >05:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="18:00" >06:00 PM</Dropdown.Item>
                            </DropdownButton>
                            <br/> <br/> <br/>
                            <DropdownButton id="dropdown-basic-button" title={this.state.preferred_slot_3}size="lg" variant="info" onSelect={this.handleSelect("preferred_slot_3")} required>
                            <Dropdown.Item eventKey="09:00" >09:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="10:00" >10:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="11:00" >11:00 AM</Dropdown.Item>
                            <Dropdown.Item eventKey="16:00" >04:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="17:00" >05:00 PM</Dropdown.Item>
                            <Dropdown.Item eventKey="18:00" >06:00 PM</Dropdown.Item>
                            </DropdownButton>
                                                     
                            
                            </div>
                    </div>
                </div>
            </form>
            </center>
        </div>
        )
    }
}

export default Profile