import React from 'react';
import SepratorLine from '../../common/seprator/SepratorLine';
import { ProjectData } from '../../data/projects';
import './project.css'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const data = ProjectData
    return (
        <div className="projects">
        <SepratorLine/>
            <label className="section-title">Projects</label>
            <SepratorLine/>
            <div>
                {data.map((project)=>{
                    return(
                        <ProjectCard project={project}/>
                    )

                })}
            </div>
            
        </div>
    )
}

export default Projects
