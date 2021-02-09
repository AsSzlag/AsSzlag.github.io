import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

const ArrowUp = () => {
    return (
        <div>
            <Link to="header" smooth={true} duration={1000}>
                <FaArrowUp className="back-up"/>
            </Link>
        </div>
    )
}

export default ArrowUp
