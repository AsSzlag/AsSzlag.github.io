import Typical from 'react-typical'
import phone from '../img/phone.png'

const About = () => {
    return (
        <div className="About" id="about">
            <div className="about-left">
                <h2 className="title">ABOUT ME</h2>
                <span className="tag-acc">{"<short info>"}</span>
                <div className="about-txt">
                    <Typical
                                    steps={['I am a front-end developer and chess♘ aficionado. Currently I am living in Warsaw, Poland. I am a big fan of React, GraphQl  for Api and animating SVGs in CSS. I have 5 years of experience in making commercial sites with React, NextJS or Vanilla JS. I love working in international teams and good designs', 3000]}
                                    loop={1}
                                />
                </div>
                <span className="tag-acc tag-r">{"</short info>"}</span>
            </div>
            <div className="about-right">
                <div className="svg-bg">
                   <img src={phone} alt="phone view"/>

                </div>
            </div>
        </div>
    )
}

export default About
