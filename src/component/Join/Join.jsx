import React, { useRef } from "react";
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mq7dfr3', 'template_hcc6mzc', form.current, 'sODUQ-2hzsPsnusTM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (

        <div className="join" id="join-us" >
            <div className="left-j">
                <div>
                    <hr></hr>
                    <span className="stroke-text">READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_name" placeholder="Enter Your Email"/>
            <button className="btn btn-j">Join Now</button>
            </form>

            </div>
        </div>
    )
}

export default Join