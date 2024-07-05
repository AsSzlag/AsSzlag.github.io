import React from 'react'
import { FaGithub, FaFigma, FaNpm, FaJira, FaCheck } from "react-icons/fa";
import { SiVisualstudio } from "react-icons/si";
import { Tag }  from "./TagCloud.js"

const Skills = () => {
    return (
        <div className="Skills" id="skills">
         <h3 className="title">Skills</h3>
            <div className="skills-container">
                <div className="skills-hard-txt skills-flex">
                    <span className="tag-acc">{"<hard skills>"}</span>
                        <div className="skills-txt">
                                <p>I have developed and maintained multiple projects from scratch, some of them reach over 500k views per year.</p>
                                <p>I specialize in webpages and applications written in Recat and NextJS.</p>
                                <p>I build fast and repsonsive websites with intuitive and mobile first approach.</p>
                                <p>I am used to Git, slacks and writing docs in Confluence</p>
                                <p>I have basics knowledge of NodeJS/Ecpress/Python for simple back-end tasks and React native for mobile.</p>
                                </div>
                    <span className="tag-acc tag-r">{"</hard skills>"}</span>
                </div>
                <div className="hard-skills skills-flex">
                        <Tag/>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 552 552">
                        <g id="kolka">
                            <g id="kolko1">
                                <g id="Ellipse_43" fill="none" stroke="#ff6700" strokeWidth="1" strokeDasharray="5 5">
                                    <circle cx="276" cy="276" r="161" stroke="none"/>
                                    <circle cx="276" cy="276" r="160.5" fill="none"/>
                                    </g>
                                        <circle id="Ellipse_54" cx="300" cy="435" r="7.5" fill="#f5f5f5"/>
                                    </g>
                            <g id="kolko2">
                                <g id="kolko2-2" fill="none" stroke="#e4e4e4" strokeWidth="1">
                                    <circle cx="276" cy="276" r="206" stroke="none"/>
                                    <circle cx="276" cy="276" r="205.5" fill="none"/>
                                    <circle id="Ellipse_50-2" cx="80" cy="210" r="15" fill="#282c2d" />
                                    <circle id="Ellipse_53-2" cx="100" cy="165" r="10" fill="#282c2d" />
                                    <circle id="Ellipse_51-2" cx="70" cy="270" r="21" fill="#282c2d" />
                                </g>
                            </g>
                            <g id="kolko3">
                                <g id="Ellipse_37" fill="none" stroke="#e4e4e4" strokeWidth="1">
                                    <circle cx="276" cy="276" r="266" stroke="none"/>
                                    <circle cx="276" cy="276" r="265.5" fill="none"/>
                                </g>
                                    <circle id="Ellipse_48" cx="280" cy="540" r="20" fill="#d7d8fe"/>
                                    <circle id="Ellipse_55" cx="390" cy="40" r="20" fill="#d7d8fe"/>
                                    <circle id="Ellipse_56" cx="20" cy="200" r="20" fill="#d7d8fe"/>
                                    <circle id="Ellipse_52" cx="460" cy="465" r="7.5" fill="#ff6700"/>
                                </g>
                        </g>
    </svg>

                    <div className="quote">communication <br />is a key to <br /><span className="success">success</span></div>
                </div>
                <div className="skills-soft-txt skills-flex">
                    <span className="tag-acc">{"<soft skills>"}</span>
                        <div className="skills-txt">
                        <div className="soft-skill"><FaCheck /><span>communication with team members and clients</span></div>
                        <div className="soft-skill"><FaCheck />resolving conflicts between tech people and designers/business</div>
                        <div className="soft-skill"><FaCheck />remote work and time management</div>
                        <div className="soft-skill"><FaCheck />problem solving and analytical abilities</div>
                        <div className="soft-skill"><FaCheck />english spoken and technical/documentation</div>
                        <div className="soft-skill"><FaCheck />understanding UX and designs systems</div>
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
