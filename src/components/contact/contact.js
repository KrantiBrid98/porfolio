import React from "react";
import "./contact.css";

const Contact = () => {
    const click = () => {
        console.log(`click`)
        window.open('mailto:test@example.com');
    }
    return <div className="block-wrapper" style={{backgroundColor: "#252934"}} id="cont-section">
        <h3 style={{color: "#fefefe", marginBottom: "20px"}}>Contact</h3>
            <p>Have a question or need further information? Send me an email. </p>
            <div className="email">krantibrid@gmail.com</div>
             <button className="contact-button" onClick={() => click()}>Send ✉</button>
    </div>
} 

export default Contact