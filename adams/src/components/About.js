import Typical from 'react-typical'

const About = () => {
    return (
        <div className="About" id="about">
            <div className="about-left">
                <h2 className="title">ABOUT ME</h2>
                <span className="tag-acc">{"<short info>"}</span>
                <div className="about-txt">
                    <Typical
                                    steps={['I am a front-end developer and chess♘ aficionado. Currently I am living in Poznań, Poland. I am a big fan of React, and animating SVGs in CSS. I have 3 years of experience in making commercial sites with WordPress and JS.', 3000]}
                                    loop={1}
                                />
                </div>
                <span className="tag-acc tag-r">{"</short info>"}</span>
            </div>
            <div className="about-right">
                <div className="svg-bg">
                   

                </div>
            </div>
        </div>
    )
}

export default About
