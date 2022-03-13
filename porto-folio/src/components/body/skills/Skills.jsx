import React from 'react';
import "./skills.css";
import SepratorLine from '../../common/seprator/SepratorLine';
import SkillCard from './SkillCard';
import { SkillsData } from '../../data/skills';



const Skills = () => {
    const data = SkillsData;
    return (
        <div className="skills">
        <SepratorLine/>
        <label className="section-title">Skills</label>
        <SepratorLine/>
        <div className="skills-container">
            {data.map((item)=>{
                return(
                    <div className="skills-section">
                        <label className="skills-section-title">{item.type}</label>
                        <div className="skills-lists">
                            {
                                item.lists.map((skill)=>{
                                    return(

                                        <SkillCard skill={skill}/>
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </div>

            
        </div>
    )
}

export default Skills
