import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import logo from "../assets/images/logo.png";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { SpaceBar } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { toast } from "react-toastify";
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   window: PropTypes.func,
// };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

// let initialState =  {
//   "isAuthenticated": props.isAuthenticated,
// }


export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleSignupClick = (event) => {
    props.setExpert(false);
    window.location.href='/register';
  }

  const logout = async e => {
    e.preventDefault();
    handleClose();
    try {
      localStorage.removeItem("token");
      props.setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLoginNavBar = () => {
    console.log(props.isAuthenticated);
    if(props.isAuthenticated){
      return (
        <React.Fragment>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
          <AccountCircle color='primary' fontSize='large' style={{fontSize:30}} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}> <Link to='/dashboard' style={{color:'black'}}> {props.first_name?props.first_name+" "+props.last_name:"Dashboard"} </Link> </MenuItem>
            <MenuItem onClick={e => logout(e) }>Sign Out</MenuItem>
          </Menu>
        </React.Fragment>
      )

    }else{
      return (
        <React.Fragment>
          <Button variant="outlined" onClick={event => window.location.href='/login'} color="primary" style={{borderRadius:50, paddingRight:30, paddingLeft:30,fontSize:15}}>Login</Button>   
          <SpaceBar />
          <Button variant="outlined" onClick = {event => handleSignupClick(event)} color="secondary" style={{borderRadius:50, paddingRight:30, paddingLeft:30 ,fontSize:15}}>signup</Button>
        </React.Fragment>
      )    
    }
  }
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar style={{background:"white", marginTop:0}} >
            <Toolbar>
              <img className={classes.menuButton} src={logo}  alt="logo" style={{width:200, height:50}}/>
              <Typography className={classes.title}></Typography>
              {handleLoginNavBar()}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    </div>
  );
}
