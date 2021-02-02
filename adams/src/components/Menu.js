import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'


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
                        <a href="#header"><li className="menu-el">{"<home>"}</li></a>
                        <a href="#about"><li className="menu-el">{"<about>"}</li></a>
                        <a href="#skills"><li className="menu-el">{"<skills>"}</li></a>
                        <a href="#portfolio"><li className="menu-el">{"<portfolio>"}</li></a>
                        <a href="#contact"><li className="menu-el">{"<contact>"}</li></a>
                    </ul>
            </animated.div>)}
        </div>

)
}

export default Menu
