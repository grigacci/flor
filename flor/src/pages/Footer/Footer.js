import React from 'react';
import "./Footer.css";
import { FaWhatsapp,FaInstagram,FaLinkedin,FaFacebookF } from 'react-icons/fa';
import {HiOutlineMail,HiLocationMarker} from "react-icons/hi";

function Footer(props) {
    return (
    <div>
    {props.children}
    <div className="footer" style={{
        backgroundImage: "url(/images/graminha.png)",backgroundColor: "white"}}>
             
        <div style={{marginTop: "3rem",backgroundColor: "black"}}>
        <div className="meio">
            <h3>
                <a href="mailto:contato@cpejr.com.br"  style={{color : "white", margin: "1.2rem"}}><HiOutlineMail /></a>
                <a href="https://web.whatsapp.com/"  style={{color : "white", margin: "1.2rem"}}><FaWhatsapp /></a>
                <a href="https://www.instagram.com/cpe.jr/"  style={{color : "white", margin: "1.2rem"}}><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/cpe-jr"  style={{color : "white", margin: "1.2rem"}}><FaLinkedin/></a>
                <a href="https://www.facebook.com/cpejr"  style={{color : "white", margin: "1.2rem"}}><FaFacebookF /></a>
                <a href="https://goo.gl/maps/MQ4KbLYt1kZFSNh88"  style={{color : "white", margin: "1.2rem"}}><HiLocationMarker /></a>    
            </h3>
        </div>
        </div>
    </div>
    </div>
      )
}

export default Footer
