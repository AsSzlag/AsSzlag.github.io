import React from 'react'
import { FaGithub, FaFigma, FaNpm, FaJira, FaCheck } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import TagCloud from "./TagCloud"

const Skills = () => {
    return (
        <div className="Skills" id="skills">
         <h3 className="title">Skills</h3>
            <div className="skills-container">
                <div className="skills-hard-txt skills-flex">
                    <span className="tag-acc">{"<hard skills>"}</span>
                        <div className="skills-txt">
                                <p>I have developed and maintained multiple projects from scratch, some of them reach over 500k views per year.</p>
                                <p>I specialize in webpages and apps written in React and developing whole services based on Wordpress.</p>
                                <p>I build fast and repsonsive websites with intuitive and mobile first approach.</p>
                                </div>
                    <span className="tag-acc tag-r">{"</hard skills>"}</span>
                </div>
                <div className="hard-skills skills-flex">
                        <TagCloud />
                </div>
                <div className="tools">
                    <div className="tool t-center">TOOLS:</div>
                    <div className="tool"><SiVisualstudio className="tool-svg" /></div>
                    <div className="tool"><FaGithub className="tool-svg" /></div>
                    <div className="tool"><FaFigma className="tool-svg" /></div>
                    <div className="tool"><FaNpm className="tool-svg" /></div>
                    <div className="tool"><FaJira className="tool-svg" /></div>
                </div>
                <div className="soft-skills skills-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 502" className="circle-center">
                    <g id="Ellipse_37" stroke="#e4e4e4" fill="none" className="circle-1">
                        <circle cx="251" cy="251" r="251" stroke="none"/>
                        <circle cx="251" cy="251" r="250.5" fill="none"/>
                    </g>
                    <g id="Ellipse_38" stroke="#e4e4e4" fill="none" className="circle-2">
                        <circle cx="251" cy="251" r="206" stroke="none"/>
                        <circle cx="251" cy="251" r="205.5" fill="none"/>
                    </g>
                    <g id="Ellipse_43" fill="none" stroke="#ff6700" strokeDasharray="5 5" className="circle-3">
                        <circle cx="251" cy="251" r="161"  stroke="none"/>
                        <circle cx="251" cy="251" r="160.5"  fill="none"/>
                    </g>
                </svg>
                    <div className="quote">communication <br />is a key to <br />success</div>
                </div>
                <div className="skills-soft-txt skills-flex">
                    <span className="tag-acc">{"<soft skills>"}</span>
                        <div className="skills-txt">
                        <div className="soft-skill"><FaCheck /><span>communication with team members and clients</span></div>
                        <div className="soft-skill"><FaCheck />remote work and time management</div>
                        <div className="soft-skill"><FaCheck />problem solving and analytical abilities</div>
                        <div className="soft-skill"><FaCheck />problem solving</div>
                        <div className="soft-skill"><FaCheck />english spoken and technical/documentation</div>
                        <div className="soft-skill"><FaCheck />analytical abilities</div>
                        </div>
                    <span className="tag-acc tag-r">{"</soft skills>"}</span>
                </div>
            <div className="skills-txt-small">
                    {"//* Beside Front-end related skills I've done some OOP coding in C/C++ and since I work 1 year as database databse developer i've obtained basic skills in SQL(MS SQL, PostgreSQL), linux systems and XML export."
}
                </div>
            </div>
        </div>
    )
}

export default Skills
