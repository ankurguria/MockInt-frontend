import React, { Component } from 'react';
import InterType from './InterType';
import SlotBooking from './SlotBooking';
import Confirm from './Confirm';
import Success from './Success';
import PeerSelection from './PeerSelection';
import NoPeer from './NoPeer';
import UserCard from './userCard';
export class Form extends Component {
    state = {
        step: 1,
        interviewType: '',
        date: '',
        time:  '',
        allExperts :[],
        interviewFor : this.props.intType,
        selectedExpert: '',
        expertFound : false,
        peerMatched : false
    };

    nextStep = () => {
        
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };
    prevStep1 = () => {
        const { step } = this.state;
        this.setState({ step: step - 2 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    stateChange = (input,val) =>{
        this.setState({[input]:val});
    }
    callApi = async () =>{
       
     // console.log('my timestamp created is :'+ timestamp);
             try {
            const res = await fetch("https://mockinterviewplatform.herokuapp.com/api/slotbooking/allExpertData", {
              method: "GET",
              //credentials: 'include',
              headers: {token: localStorage.token }
            });
            const parseData = await res.json();
            this.setState({allExperts:parseData});
          } catch (err) {
            console.error(err.message);
          }
    };
    peerSearch = async () =>{
        
        await this.callApi();
        if(this.state.allExperts.length===0) this.setState({expertFound:false});
        this.setState({expertFound:true});

    };
   componentDidMount()
   {
    this.peerSearch();
   }

    render() {
        const { step } = this.state;
        const { interviewType, date, time, selectedExpert,allExperts,interviewFor,peerMatched } = this.state;
        const values = { interviewType, date, time, selectedExpert,allExperts,interviewFor,peerMatched };
        
        switch (step) {
            case 1:
                return (
                   
                    <InterType
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <SlotBooking
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
                case 3:
                   {
                    if(interviewFor==="peer")
                    this.nextStep();
                   } 
                    
                      return (
                          
                        /*  <UserCard allPeers/>*/
                    <PeerSelection
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        
                    />
                    );
            case 4:
                    return (
                        <Confirm
                        nextStep={this.nextStep}
                        prevStep={interviewFor==="peer"? this.prevStep1:this.prevStep}
                        stateChange={this.stateChange}
                        values={values} 
                    />
                    );
                   
                
            case 5:
                {console.log(this.state.peerMatched)}
                if((this.state.interviewFor==="peer" && this.state.peerMatched) || (this.state.interviewFor==="expert" && this.state.expertFound))
                    {
                return (
                    <Success />
                );
                    }
                    else{
                        return(<NoPeer 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values ={values}
                        />);
                    }
            default:
                return <Success />;
            
        }
    }
}

export default Form
