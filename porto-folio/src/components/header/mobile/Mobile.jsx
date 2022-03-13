import React from 'react'
import "./mobile.css"

const Mobile = ({ isOpen, setisOpen }) => {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setisOpen(!isOpen)}>
                <i class="fi-rr-cross-small"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option"><div className="mobile-item"><a href="#projects"><i className="fi-rr-edit-alt option-icon"></i>Projects</a></div></div>
                <div className="mobile-option"><div className="mobile-item"><a href="#skills"><i className="fi-rr-laptop option-icon"></i>Skills</a></div></div>
                <div className="mobile-option"><div className="mobile-item"><a href="#work"><i className="fi-rr-briefcase option-icon"></i>Work</a></div></div>
                <div className="mobile-option"><div className="mobile-item"><a href="#contacts"><i className="fi-rr-following option-icon"></i>Contact</a></div></div>
            </div>


        </div>
    )
}

export default Mobile
