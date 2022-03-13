import React from 'react'
import SepratorLine from "../../common/seprator/SepratorLine"
import SocialContact from '../../common/social-contact/SocialContact';
import './contact.css';

const Contact = () => {
    return (
        <div className="contacts">
        <SepratorLine/>
            <label className="section-title">Contact</label>
            <SepratorLine/> 
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to Contact ? Contact Me!!</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={require("../../../images/Mihir-Resume.pdf").default}>
                    <i class="fas fa-file-download download-icon"></i> Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
