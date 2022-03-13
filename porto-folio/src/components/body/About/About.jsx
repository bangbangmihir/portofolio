import React from 'react';
import SocialContact from '../../common/social-contact/SocialContact';
import './about.css';
import Intro from '../Intro/Intro';
import Animated from '../Intro/Animation/Animated';

const About = () => {
    return (
        <div className="about">
        <div className="about-top">
        <Animated/>
            <div className="about-left">
                <h3>Hello there !👋</h3>
                <Intro/>
            </div>
            <div className="about-right">
                <img src="https://res.cloudinary.com/dupcvsqy4/image/upload/v1629032207/IMG_20190813_125415_qhm3hk.jpg" className="about-img" alt="back-img"/>

            </div>

        </div>
        <SocialContact/>
            
        </div>
    )
}

export default About
