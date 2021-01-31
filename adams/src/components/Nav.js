const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo"></div>
            <div className="navbar">
                <ul>
                    <a href="#header"><li className="nav-el">Home</li></a>
                    <a href="#about"><li className="nav-el">About</li></a>
                    <a href="#portfolio"><li className="nav-el">Portfolio</li></a>
                    <a href="#contact"><li className="nav-el">Contact</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Nav