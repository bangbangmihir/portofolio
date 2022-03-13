import React from 'react';
import './projectcard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (<a className="project-link" href={project.demo}>
                        <div className="link-button">
                            <i class="devicon-clojure-line">Demo</i>
                        </div>
                    </a>)}
                    {project.github && (<a className="project-link" href={project.github}>
                        <div className="link-button">
                            <i class="devicon-github-original">Github</i>
                        </div>
                    </a>)}

                </div>
                <p>{project.about}</p>
                <div className="projects-tags">
                    {
                        project.tags.map((tag) => {
                            return (
                                <label className="tag">{tag} </label>
                            )
                        })
                    }
                </div>
            </div>
            <img src={project.image} className="project-img" alt="project-img" />
        </div>
    )
}

export default ProjectCard
