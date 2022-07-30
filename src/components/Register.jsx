import React from 'react';
import '../Css/Contact.css';

export default function Register() {
  return (
    <div>

<div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details" />
          <div className="input-box">
            <span className="details"> Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required />
          </div>
          {/* <div className="input-box">
            <span className="details">Father's Name</span>
            <input type="text" placeholder="Enter your name" required />
          </div> */}
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your Email" required />
          </div>
          <div className="input-box">
            <span className="details">Date of birth</span>
            <input type="date" name="bday" required pattern="\d{4}-\d{2}-\d{2}" />
             
          </div>
          <div className="input-box">
            <span className="details"> Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
         {/* <div className="input-box">
            <span className="details">Designation</span>
            <input type="text" placeholder="Enter your text" required />
         </div> */}
         {/* <div className="input-box">
            <span className="details">Security Question</span>
            <input type="text" placeholder="Enter your text" required />
         </div> */}

        <div className="button">
          <input type="submit" value="Register"/>
        </div>
        <div className="button">
            <input type="reset" value="Reset"/>
        </div>
         
      </form>
    </div>
  </div>
    </div>
  )
}
