import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="Contact" id="contact">
            <div className="contact-left">
                <h3 className="title">GET IN TOUCH</h3>
                <span className="tag-acc">{"<contact info>"}</span>
                    <div className="icon-flex">
                        <div className="icon-bar"><FaEnvelope className="ico icon"/>a.s.szlag@gmail.com</div>
                        <div className="icon-bar"><FaPhoneAlt className="ico icon"/>+48 795 951 168</div>
                        <div className="icon-bar"><FaMapMarkerAlt className="ico icon"/>Poznań, Poland</div>
                    </div>
                <span className="tag-acc tag-r">{"</contact info>"}</span>
            </div>
            <div className="contact-right">

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
                <div className="contact-svg">
                    <FaLinkedinIn className="ico-r icon" onClick={(e) => {
      e.preventDefault();
      window.open('https://www.linkedin.com/in/adam-s-170766205/', '_blank');
      }}/>
                    <FaGithub className="ico-r icon" onClick={(e) => {
      e.preventDefault();
      window.open('https://github.com/AsSzlag/AsSzlag', '_blank');
      }}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
