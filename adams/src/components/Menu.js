import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if(showMenu){
        menu = 
                <ul className="mobile-menu">
                <h3>Menu</h3>
                    <a href="#header"><li className="menu-el">{"<home>"}</li></a>
                    <a href="#about"><li className="menu-el">{"<about>"}</li></a>
                    <a href="#skills"><li className="menu-el">{"<skills>"}</li></a>
                    <a href="#portfolio"><li className="menu-el">{"<portfolio>"}</li></a>
                    <a href="#contact"><li className="menu-el">{"<contact>"}</li></a>
                </ul>

        menuMask = <div
                className="mask"
                onClick={()=> setShowMenu(false)}
                >
                </div>
    }
    return (
        <div class="hamburger">
            <FontAwesomeIcon style={{fontSize:"2em"}} 
            icon={faBars}
            onClick={()=> setShowMenu(!showMenu)}
            />
            {menu}
            {menuMask}
        </div>
    )
}

export default Menu
