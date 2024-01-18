import "./Footter.css";
import React from 'react';
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";

const Footter = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>123 Colombo Rd,</p>
                        <p>Galle.</p>
                    </div>

                </div>
                <div className="phone">
                   <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    +94772296066</h4> 
                </div>
                <div className="email">
                   <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    infor@gmail.com</h4> 
                </div>

            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Sajika Dilshan. Undergraduate Sabaragamuwa University of Sri Lanka.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>

                </div>
            </div>

        </div>
          
    </div>
  )
}

export default Footter