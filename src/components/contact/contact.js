import React from "react";
import "./contact.css";
import { ThemeContext } from '../context';

const Contact = () => {
  const [context] = React.useContext(ThemeContext);
  const click = () =>  window.open('mailto:krantibrid@gmail.com');
  const bgColor = context ? "#252934" : "#ffffff";

    return <div className="block-wrapper" style={{backgroundColor: bgColor }} id="cont-section">
        <h3 className={`darkMode_${context}`} style={{ marginBottom: "20px"}}>Contact</h3>
            <p>Have a question or need further information? Send me an email. </p>
            <div className="email">krantibrid@gmail.com</div>
             <button className={`contact-button darkMode_${context}`} onClick={() => click()}>Send ✉</button>
    </div>
} 

export default Contact
