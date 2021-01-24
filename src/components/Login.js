import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import '../assets/fonts/font-awesome-4.7.0/css/font-awesome.css';
import { toast } from "react-toastify";
import '../assets/fonts/iconic/css/material-design-iconic-font.css';
import '../assets/loginmain.css';
import '../assets/loginutil.css';
import Image from'../assets/images/bg-01.jpg';
import Logo from '../assets/images/miplog.png';
const Login = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
 
  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "https://mockinterviewplatform.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
        console.log(parseRes);
      if (parseRes.token) {

        localStorage.setItem("token", parseRes.token);
        props.setExpert(parseRes.is_expert);
        props.setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        props.setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
    //setAuth(true);
  };

  return (
    <React.Fragment>
      <div className="limiter">
        <div className="container-login100" style={{backgroundImage: `url(${Image})`}}>
          <div className="wrap-login100">
            
            <span className="login100-form-logo">
              <img src ={Logo} alt="logo" />
            </span>

            <span className="login100-form-title p-b-34 p-t-27">
              Log in
            </span>
            <form onSubmit={onSubmitForm} className="login100-form validate-form">
              <div className="wrap-input100 validate-input" data-validate = "Enter username">
                <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={e => onChange(e)}
                className="input100 form-control my-3"
                />
                
              </div>

              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={e => onChange(e)}
                className="input100 form-control my-3"
                style={{paddingInlineStart:50}}
                />
                
              </div>
                
              <div className="container-login100-form-btn">
                <Button className="login100-form-btn" variant="contained" style={{borderRadius:50, paddingRight:30, paddingLeft:30, fontSize:15 }}><button >
                  Login
                </button>
                </Button>
              </div>
              
            </form>
            <div className="text-center p-t-90">
              <center> <button><Link to="/register" style ={{color:"white"}} className="txt1">Click To Register</Link></button></center>
              <button><Link to="/" style ={{color:"white"}} className="txt1">Home</Link></button>
            </div>
          </div>
        </div>
	    </div>
    </React.Fragment>
  )};

export default Login;