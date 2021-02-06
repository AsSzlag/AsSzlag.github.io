import Typical from 'react-typical'
import React from 'react'

const Skills = () => {
    return (
        <div className="Skills" id="skills">
         <h3 className="title">Skills</h3>
            <div className="skills-container">
                <div className="skills-hard-txt skills-flex">
                    <span className="tag-acc">{"<hard skills>"}</span>
                        <div className="skills-txt">
                                <Typical
                                    steps={['I am a front-end developer and chess♘ aficionado. Currently I am living in Poznań, Poland. I am a big fan of React, and animating SVGs in CSS. I have 3 years of experience in making commercial sites with WordPress and JS.', 3000]}
                                    loop={1}
                                />
                                </div>
                    <span className="tag-acc tag-r">{"</hard skills>"}</span>
                </div>
                <div className="hard-skills skills-flex">
                        <div id="1" className="pos-1 shard">HTML</div>
                        <div id="2" className="pos-2 shard">Sass</div>
                        <div id="3" className="pos-3 shard">Bootstrap</div>
                        <div id="4" className="pos-4 shard">Vanilla JS</div>
                        <div id="5" className="pos-3 shard">React</div>
                        <div id="6" className="pos-1 shard">REST API</div>
                        <div id="7" className="pos-2 shard">Wordpress</div>
                        <div id="8" className="pos-5 shard">RWD</div>
                        <div id="9" className="pos-4 shard">SVG animations</div>
                        <div id="10" className="pos-1 shard">basic node.js</div>
                </div>
                <div className="soft-skills skills-flex">
                    Soft skille:
                    self-improvement
                    communication(both with team members and clients)
                    remote work and time management
                    problem solving and analytical abilities
                    english(both normal and technical/documentation)
                </div>
                <div className="skills-soft-txt skills-flex">
                    blabla bla
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
