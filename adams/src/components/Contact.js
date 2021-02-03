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
