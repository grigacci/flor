import React from 'react';
import "./Footer.css";
import { FaWhatsapp,FaInstagram,FaLinkedin,FaFacebookF } from 'react-icons/fa';
import {HiOutlineMail,HiLocationMarker} from "react-icons/hi";

function Footer(props) {
    return (
    <div>
    {props.children}
    <div className="footer" style={{
        backgroundImage: "url(/images/graminha.png)",backgroundColor: "rgba(0, 0, 0, 0.0)" , opacity: "1"}}>
             
        <div style={{marginTop: "3rem",backgroundColor: "black",marginBottom: "0px"}}>
        <div className="meioFooter">
            <h3>
                <a href="mailto:contato@cpejr.com.br" className="IconFooter"><HiOutlineMail /></a>
                <a href="https://web.whatsapp.com/" className="IconFooter" ><FaWhatsapp /></a>
                <a href="https://www.instagram.com/cpe.jr/" className="IconFooter" ><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/cpe-jr" className="IconFooter" ><FaLinkedin/></a>
                <a href="https://www.facebook.com/cpejr" className="IconFooter" ><FaFacebookF /></a>
                <a href="https://goo.gl/maps/MQ4KbLYt1kZFSNh88" className="IconFooter" ><HiLocationMarker /></a>
            </h3>
        </div>
        </div>
    </div>
    </div>
      )
}

export default Footer;
