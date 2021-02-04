import Card from "./Card"

const Portfolio = () => {
    return (
        <div className="Portfolio" id="portfolio">
            <h3 className="title">Projects</h3>
                <span className="tag-acc">{"<contact info>"}</span>
                <div className="projects">
                    <Card
                        title="Calculator App"
                        imageUrl="https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
                        body="Simple calculator using vanilla JS. Neumophism style"
                        link=""
                        imgAlt="Calulator app"
                    />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <span className="tag-acc tag-r">{"</contact info>"}</span>
        </div>
    )
}

export default Portfolio
