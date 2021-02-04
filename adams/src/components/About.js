const About = () => {
    return (
        <div className="About" id="about">
            <div className="about-left">
                <h3 className="title">ABOUT ME</h3>
                <span className="tag-acc">{"<short info>"}</span>
                <div className="about-txt">I am a front-end developer and chess♘ 
                    aficionado. Currently I'm living in 
                    Poznań, Poland.
                    I'm a big fan of React, and animating 
                    SVGs in CSS. 
                    I have 3 years of experience in making 
                    commercial sites with WordPress 
                    and JS.</div>
                <span className="tag-acc tag-r">{"</short info>"}</span>
            </div>
            <div className="about-right">
                <div className="svg-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="404" height="366" className="elipses" viewBox="0 0 404 366">
                        <g id="kółka" transform="translate(-815 -3973)">
                            <g id="Ellipse_24"  transform="translate(900 3973)" fill="none" stroke="#f5f5f5" strokeWidth="2">
                                <ellipse cx="159.5" cy="160" rx="159.5" ry="160" stroke="none"/>
                                <ellipse cx="159.5" cy="160" rx="158.5" ry="159" fill="none"/>
                            </g>
                            <g id="Ellipse_25" transform="translate(815 4074)" fill="none" stroke="#ff6700" strokeWidth="2" strokeDasharray="5 5">
                                <circle cx="132.5" cy="132.5" r="132.5" stroke="none"/>
                                <circle cx="132.5" cy="132.5" r="131.5" fill="none"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="soft-skills">
                    skills
                </div>
            </div>
        </div>
    )
}

export default About
