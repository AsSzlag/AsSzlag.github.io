import Menu from "./Menu"
import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo" >
                <svg width="102.93" height="72.88" viewBox="0 0 102.93 72.88" href="#header">
    <g id="Component_1_1" transform="translate(4.45 1.413)">
        <path id="Line_3" d="M0 0L0 20" className="cls-1" transform="translate(48.167 16.667)"/>
        <path id="Path_1569" d="M4197.432 1080.333l.735-23.167-23 30h23v29l-96.833-34.833 96.833-34.5" className="cls-1" transform="translate(-4101.333 -1046.833)"/>
        <path id="Path_1570" d="M4198.167 1112.667l-17.833-21.167" className="cls-1" transform="translate(-4101.333 -1045.833)"/>
    </g>
</svg>
            </div>
            <div className="navbar">
                <ul>
                    <Link to="header" smooth={true} duration={1000}  className="link"><li className="nav-el">{"<home>"}</li></Link>
                    <Link to="about" smooth={true} duration={1000}><li className="nav-el">{"<about>"}</li></Link>
                    <Link to="skills" smooth={true} duration={1000}><li className="nav-el">{"<skills>"}</li></Link>
                    <Link to="portfolio" smooth={true} duration={1000}><li className="nav-el">{"<portfolio>"}</li></Link>
                    <Link to="contact" smooth={true} duration={1000}><li className="nav-el">{"<contact>"}</li></Link>
                </ul>
            </div>
            <Menu />
        </nav>
    )
}

export default Nav