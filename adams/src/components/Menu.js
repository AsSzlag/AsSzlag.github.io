import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import { Link } from "react-scroll";


const Menu = () => {

    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })

    const menuTransitions = useTransition(showMenu, null, {
        from: { position: 'fixed', opacity: 0 ,transform: 'translateX(-100vw)'},
        enter: { opacity: 1 ,transform: 'translateX(0%)', zIndex:'999', top:'0', left:'0'},
        leave: { opacity: 0 ,transform: 'translateX(-100vw)'},
        })

    const [icons, setIcon] = useState(faBars);

    const wrapperFunction = () => {
    setShowMenu(!showMenu);
    setIcon(faBars ? faTimes : faBars);
}

    if(showMenu){
    }
    const closeMenu = ()=> {setShowMenu(false); setIcon(faBars)};
    return (
        <div className="hamburger">
            <FontAwesomeIcon style={{fontSize:"2em"}}
            icon={icons}
            onClick={()=>{wrapperFunction()}}
            />

            {maskTransitions.map(({ item, key, props }) =>
            item && <animated.div
            key={key}
            style={props}>
               <div
                    className="mask"
                    onClick={()=> {setShowMenu(false); setIcon(faBars)}}
                    >
                </div>
            </animated.div>)}

             {menuTransitions.map(({ item, key, props }) =>
            item && <animated.div
            key={key}
            style={props}>
                <ul className="mobile-menu">
                    <h3>Menu</h3>
                        <Link to="header" smooth={true} duration={1000} onClick={closeMenu}><li className="menu-el">{"<home>"}</li></Link>
                        <Link to="about" smooth={true} duration={1000} onClick={closeMenu}><li className="menu-el">{"<about>"}</li></Link>
                        <Link to="skills" smooth={true} duration={1000} onClick={closeMenu}><li className="menu-el">{"<skills>"}</li></Link>
                        <Link to="portfolio" smooth={true} duration={1000} onClick={closeMenu}><li className="menu-el">{"<portfolio>"}</li></Link>
                        <Link to="contact" smooth={true} duration={1000} onClick={closeMenu}><li className="menu-el">{"<contact>"}</li></Link>
                    </ul>
            </animated.div>)}
        </div>

)
}

export default Menu
