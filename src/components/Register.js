import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import '../assets/signup_style.css';
import '../assets/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import Image from '../assets/images/bg-registration-form-2.jpg';
import moment from 'moment';
const Register = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
	password: "",
	confirm_password:"",
    name: "",
    first_name: "",
    last_name: "",
    ph_no: "",
    education: "",
    created_at: "",
    is_peer: true,
    country: "",
    time_zone: "",
    is_admin: false,
    is_expert: props.is_expert===true?true:false,
    is_active: true,
    last_login: "",
    is_reported: false,
    signup_type: ""
  });
  console.log(inputs.is_expert);
  const { email, first_name, last_name, ph_no, education, created_at, is_peer, country, time_zone, is_admin, is_expert, is_active, last_login, is_reported, signup_type, password,confirm_password} = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

	
	const onChangePassword = e =>{
		setInputs({ ...inputs, [e.target.name]: e.target.value });
		if(password!=e.target.value){
			document.getElementById("errormsg").innerHTML = "Password Doesnot match";
		}
		else
		{
			document.getElementById("errormsg").innerHTML = "";
		}
	}

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, first_name, last_name, ph_no, education, created_at, is_peer, country, time_zone, is_admin, is_expert, is_active, last_login, is_reported, signup_type, password};
      const response = await fetch(
        "https://mockinterviewplatform.herokuapp.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
	  );
	  function myFunction(obj) {
		return obj.msg+" ";
	  }
      const parseRes = await response.json();
		if(parseRes.status){
			if (parseRes.token) {
				localStorage.setItem("token", parseRes.token);
				props.setExpert(parseRes.is_expert);
				props.setAuth(true);
				toast.success("Register Successfully");
			  } 
		}
      else{
			props.setAuth(false);
			let msg ="";
			msg += parseRes.error.map(myFunction);
			toast.error(msg);	
	  }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="wrapper" style={{backgroundImage: `url(${Image})`}}>
			<div className="inner">
				<form onSubmit={onSubmitForm}>
					<h3>Register</h3>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">First Name</label>
							<input
							type="text"
							name="first_name"
							value={first_name}
							onChange={e => onChange(e)}
							className="form-control my-3"
						  />
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Last Name</label>
							<input
								type="text"
								name="last_name"
								value={last_name}
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
						</div>
					</div>
					<div className="form-wrapper">
						<label htmlFor="">Email</label>
							<input
						type="text"
						name="email"
						value={email}
						onChange={e => onChange(e)}
						className="form-control my-3"
					  />
					</div>
					<div className="form-wrapper">
						<label htmlFor="">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={e => onChange(e)}
							className="form-control my-3"
							/>
					</div>
					<div className="form-wrapper">
						<label htmlFor="">Confirm Password</label>
						<input
							type="password"
							name="confirm_password"
							value={confirm_password}
							onChange={e => onChangePassword(e)}
							className="form-control my-3"
							/>
					</div>
					<p id="errormsg" className="text-danger"></p>
					<div className="form-group">
						<div className="form-wrapper">
							<label htmlFor="">Phone No.</label>
							<input
								type="text"
								name="ph_no"
								value={ph_no}
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
						</div>
						<div className="form-wrapper">
							<label htmlFor="">Education</label>
							<input
								type="text"
								name="education"
								value={education}
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
						</div>
					</div>
					<div className="hidden">
						<input
								type="text"
								name="created_at"
								value={moment().format()}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="is_peer"
								value={is_peer}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="country"
								value={country}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="time_zone"
								value={moment().format()}
								
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="is_admin"
								value={false}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="is_expert"
								value={is_expert}
						
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="is_active"
								value={is_active}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="last_login"
								value={last_login}
							
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="is_reported"
								value={is_reported}
								
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
								<input
								type="text"
								name="signup_type"
								value="password"
								onChange={e => onChange(e)}
								className="form-control my-3"
								/>
					</div>
					<button>Register Now</button>
          
				</form>
        <br/>
        <center><button ><Link to="/login" >Already Have an Account ! login</Link></button></center>
		<center><button ><Link to="/" >Home</Link></button></center>
			</div>
		</div>
      
    </Fragment>
  );
};

export default Register;