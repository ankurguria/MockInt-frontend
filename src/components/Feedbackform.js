import React, { Component } from 'react';
import { toast } from "react-toastify";
import '../assets/feedbackstyle.css';
import ReactStars from "react-rating-stars-component";
export class Feedbackform extends Component {
    constructor(props) {
        super(props);
        this.state = { suggestions_for_us: '', 
        feedback: "",
        overall_score: 0
    };
    this.ratingChanged = this.ratingChanged.bind(this);
      }
      mySubmitHandler = async (event) => {
        event.preventDefault();
        const url ="https://mockinterviewplatform.herokuapp.com/api/feedback/giveFeedback";
        const data = {"session_id":this.props.session_id,
        "suggestions_for_us": this.state.suggestions_for_us,
        "feedback": this.state.feedback,
        "overall_score": this.state.overall_score,
        "report": false
    }
        console.log(data);
        fetch(url, { method: "POST", // or ‘PUT’
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{ 'content-type': 'application/json',token: localStorage.token} })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log(typeof response)); 
        toast.warn('🦄 Feedback Saved Successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        this.props.closeModalg();
      }
      myChangeHandler = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };
    ratingChanged(newRating) {
       // this.setState({overall_score:newRating});
        console.log(newRating);
        this.setState(state => ({
            overall_score: newRating
          }));
    }
    render() {
        return (
            <div className="container contact-form" >
            <center>
            <form onSubmit={this.mySubmitHandler} className="myform" >
                <h3>Please Give Feedback</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" onChange={this.myChangeHandler('suggestions_for_us')} placeholder="Suggestions For Us" value={this.state.suggestions_for_us} style={{width: "100%", height: "100px"}}/>
                        </div>
                        <div className="form-group">
                        <h4> Rating : .</h4>
                            <ReactStars
                                count={5}
                                value={this.state.overall_score} 
                                onChange={this.ratingChanged}
                                size={28}
                                activeColor="#ffd700"
                            />
                        </div>
                        <center>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-primary btnContact" value="Submit Feedback" />
                        </div>
                    </center>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" value={this.state.feedback} onChange={this.myChangeHandler('feedback')} placeholder="Your Feedback *" style={{width: "500px", height: "150px"}}></textarea>
                        </div>
                    </div>
                </div>
            </form>
            </center>
        </div>
        )
    }
}

export default Feedbackform