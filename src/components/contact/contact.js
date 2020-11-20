import React from "react";
import "./contact.css";

const Contact = () => {
    const click = () =>  window.open('mailto:krantibrid@gmail.com');
    
    return <div className="block-wrapper" style={{backgroundColor: "#252934"}} id="cont-section">
        <h3 style={{color: "#fefefe", marginBottom: "20px"}}>Contact</h3>
            <p>Have a question or need further information? Send me an email. </p>
            <div className="email">krantibrid@gmail.com</div>
             <button className="contact-button" onClick={() => click()}>Send ✉</button>
    </div>
} 

export default Contact
