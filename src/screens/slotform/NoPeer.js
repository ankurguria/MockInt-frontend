import React, { Component } from 'react';
import Image from '../../assets/images/success.png';
export class NoPeer extends Component {
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
render(){
return (
    <div>
    <img src ={Image} />
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
export default NoPeer;