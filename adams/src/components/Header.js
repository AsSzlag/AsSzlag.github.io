import Nav from "./Nav"

const Header = () => {
    return (
        <div className="Header" id="header">
            <Nav />
            <header>
            <div className="header-left">
                <div className="left-upper">
                    <span className="tag-acc">{"<developer>"}</span>
                    <h1>Adam S. Szlag</h1>
                    <span className="tag-acc tag-r">{"</developer>"}</span>
                </div>
                <div className="icons">
                    <a href="https://github.com/AsSzlag" target="blank" >
                    <svg width="44" height="44" viewBox="0 0 44 44" className="icon">
                        <g>
                            <path fill="#f5f5f5" d="M14.717 43.429c0 .182-.2.328-.461.328-.293.027-.5-.118-.5-.328 0-.182.2-.328.461-.328.269-.027.5.118.5.328zm-2.759-.409c-.062.182.115.391.381.446a.411.411 0 0 0 .55-.182c.053-.182-.115-.391-.381-.473a.451.451 0 0 0-.55.209zm3.921-.155c-.257.064-.435.237-.408.446.027.182.257.3.523.237s.435-.237.408-.419-.266-.292-.523-.264zM21.716 8C9.412 8 0 17.581 0 30.2a22.777 22.777 0 0 0 15.036 21.763c1.135.209 1.535-.51 1.535-1.1 0-.564-.027-3.676-.027-5.586 0 0-6.21 1.365-7.514-2.711 0 0-1.011-2.648-2.466-3.33 0 0-2.031-1.428.142-1.4a4.664 4.664 0 0 1 3.424 2.347c1.943 3.512 5.2 2.5 6.467 1.9a5.107 5.107 0 0 1 1.419-3.066c-4.959-.564-9.962-1.3-9.962-10.054a6.986 6.986 0 0 1 2.094-5.363 8.8 8.8 0 0 1 .231-6.178c1.854-.591 6.121 2.457 6.121 2.457a20.452 20.452 0 0 1 11.142 0s4.267-3.057 6.121-2.457a8.8 8.8 0 0 1 .231 6.178c1.419 1.61 2.289 2.866 2.289 5.359 0 8.78-5.225 9.48-10.184 10.054a5.454 5.454 0 0 1 1.508 4.222c0 3.066-.027 6.86-.027 7.606 0 .591.408 1.31 1.535 1.1C37.985 48.924 44 40.29 44 30.2A22.018 22.018 0 0 0 21.716 8zM8.623 39.38c-.115.091-.089.3.062.473.142.146.346.209.461.091.115-.091.089-.3-.062-.473-.142-.146-.346-.209-.461-.091zm-.958-.737c-.062.118.027.264.2.355a.26.26 0 0 0 .381-.064c.062-.118-.027-.264-.2-.355-.177-.054-.319-.027-.381.064zm2.874 3.239c-.142.118-.089.391.115.564.2.209.461.237.577.091.115-.118.062-.391-.115-.564-.196-.209-.462-.237-.577-.091zm-1.012-1.337c-.142.091-.142.328 0 .537s.381.3.5.209a.423.423 0 0 0 0-.564c-.124-.209-.355-.3-.5-.182z" transform="translate(-172 -295) translate(172 287)"/>
                        </g>
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/adam-s-170766205/">
                        <svg width="44" height="44" viewBox="0 0 44 44" className="icon">
                            <g transform="translate(-151 -347)">
                                <circle cx="22" cy="22" r="22" fill="#f5f5f5" transform="translate(151 347)"/>
                                <path fill="#282c2d" d="M4.924 22.01H.363V7.322h4.561zM2.641 5.318a2.654 2.654 0 1 1 2.642-2.667 2.664 2.664 0 0 1-2.642 2.667zM22 22.01h-4.556v-7.15c0-1.7-.034-3.889-2.371-3.889-2.371 0-2.735 1.851-2.735 3.767v7.272H7.782V7.322h4.374v2h.064a4.793 4.793 0 0 1 4.316-2.372c4.616 0 5.465 3.04 5.465 6.988v8.072z" transform="translate(162 357.99)"/>
                            </g>
                        </svg>

                    </a>
                    <a href="MAILTO:a.s.szlag@gmail.com">
                        <svg width="44" height="44" viewBox="0 0 44 44" className="icon">
                            <g transform="translate(-127 -404)">
                                <circle cx="22" cy="22" r="22" fill="#f5f5f5" transform="translate(127 404)"/>
                                <path fill="#282c2d" d="M23.545 69.944a.282.282 0 0 1 .455.22v9.586A2.251 2.251 0 0 1 21.75 82H2.25A2.251 2.251 0 0 1 0 79.75v-9.581a.28.28 0 0 1 .455-.22C1.5 70.764 2.9 71.8 7.678 75.273 8.667 76 10.336 77.514 12 77.5c1.673.014 3.375-1.537 4.327-2.231 4.781-3.469 6.173-4.51 7.218-5.325zM12 76c1.088.019 2.653-1.369 3.441-1.941 6.22-4.514 6.694-4.908 8.128-6.033a1.122 1.122 0 0 0 .431-.885v-.891A2.251 2.251 0 0 0 21.75 64H2.25A2.251 2.251 0 0 0 0 66.25v.891a1.129 1.129 0 0 0 .431.886c1.434 1.12 1.908 1.519 8.128 6.033.788.571 2.353 1.959 3.441 1.94z" transform="translate(137 353)"/>
                            </g>
                        </svg>

                    </a>
                </div>
                </div>
                <div className="header-right">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Component_2_1"  viewBox="0 0 257.914 786">
                        <defs>
                            <style>
                               {` .cls-1{fill:#282c2d}.cls-1,.cls-3{stroke:#f5f5f5;stroke-width:2px}.cls-3,.cls-7{fill:none}.cls-4{fill:#ff6700}.cls-6{stroke:none}`}
                            </style>
                        </defs>
                        <g id="Rectangle_188" className="cls-1" transform="rotate(20 -600.043 285.805)">
                            <rect width="180" height="180" className="cls-6" rx="2"/>
                            <rect width="178" height="178" x="1" y="1" className="cls-7" rx="1"/>
                        </g>
                        <path id="Line_8" fill="none" stroke="#f5f5f5" strokeDasharray="5" strokeWidth="2px" d="M0 0L0 567" transform="translate(203.377)"/>
                        <path id="Line_9" d="M0 0L0 767" className="cls-3" transform="translate(190.377 19)"/>
                        <path id="Line_10" d="M0 0L0 570" className="cls-3" transform="translate(94.377 119)"/>
                        <g id="Rectangle_187" className="cls-1" transform="rotate(20 -727.333 442.742)">
                            <rect width="160" height="160" className="cls-6" rx="2"/>
                            <rect width="158" height="158" x="1" y="1" className="cls-7" rx="1"/>
                        </g>
                        <rect id="Rectangle_189" width="40" height="40" className="cls-4" rx="2" transform="rotate(20 -117.71 633.48)"/>
                        <circle id="Ellipse_17" cx="6" cy="6" r="6" className="cls-4" transform="translate(143.377 503)"/>
                        <circle id="Ellipse_18" cx="10" cy="10" r="10" fill="#d7d8fe" transform="translate(224.377 591)"/>
                    </svg>

                </div>
            </header>
        </div>
    )
}

export default Header