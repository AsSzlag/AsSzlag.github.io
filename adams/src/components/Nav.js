const Nav = () => {
    return (
        <nav className="nav">
            <div className="logo" onClick="">
                <svg width="102.93" height="72.88" viewBox="0 0 102.93 72.88" href="#header">
                <style>
                    {`.cls-1{fill:none;stroke:#f5f5f5;stroke-width:3px}`}
                </style>
    <g id="Component_1_1" transform="translate(4.45 1.413)">
        <path id="Line_3" d="M0 0L0 20" class="cls-1" transform="translate(48.167 16.667)"/>
        <path id="Path_1569" d="M4197.432 1080.333l.735-23.167-23 30h23v29l-96.833-34.833 96.833-34.5" class="cls-1" transform="translate(-4101.333 -1046.833)"/>
        <path id="Path_1570" d="M4198.167 1112.667l-17.833-21.167" class="cls-1" transform="translate(-4101.333 -1045.833)"/>
    </g>
</svg>
            </div>
            <div className="navbar">
                <ul>
                    <a href="#header"><li className="nav-el">{"<home>"}</li></a>
                    <a href="#about"><li className="nav-el">{"<about>"}</li></a>
                    <a href="#skills"><li className="nav-el">{"<skills>"}</li></a>
                    <a href="#portfolio"><li className="nav-el">{"<portfolio>"}</li></a>
                    <a href="#contact"><li className="nav-el">{"<contact>"}</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Nav