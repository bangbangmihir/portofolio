import { useState } from 'react'
import {Link} from 'react-router-dom';
import "./header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web"

const Header = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
            <Link to="/" className="logo-link">&lt; Mihir /&gt;</Link>
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu" onClick={() => setisOpen(!isOpen)}>
                    <i className="fi-rr-align-justify menu-icon"  ></i>
                  {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}    
                </div>
            </div>
        </div>
    )
}

export default Header
