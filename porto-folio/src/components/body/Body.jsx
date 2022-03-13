import React from 'react';
import About from "./About/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

import './body.css';

const Body = () => {
    return (
        <div className="body">
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            
            <section id="contacts">
                <Contact />
            </section>
            
                
            


        </div>
    )
}

export default Body
