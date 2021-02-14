import Card from "./Card"
import { FaCalculator, FaSkiing, FaTasks, FaFigma, FaIdCardAlt, FaPaperclip } from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div className="Portfolio" id="portfolio">
            <h3 className="title">Projects</h3>
                <span className="tag-acc">{"<projects>"}</span>
                <div className="projects">
                    <Card
                        title="Calculator App"
                        icon={<FaCalculator />}
                        body="Simple calculator App using pure JS with neumorphism style."
                        link="https://neumorphism-calculatorv1.netlify.app/"
                    />
                    <Card 
                        title="Ski resort"
                       icon={<FaSkiing />}
                        body="Ski resort based on WordPress with over 500k visiors annually"
                        link="https://master-ski.pl/"
                    />
                    <Card 
                        title="Task tracker app"
                       icon={<FaTasks />}
                        body="Task manager done with React hooks. Glass UI style."
                        link="https://taskmanagerv01.netlify.app"e
                    />
                    <Card 
                        title="UX designer site"
                        icon={<FaFigma />}
                        body="Portfolio site for UX/UI designer done with almost pure JS adn Sass."
                        link="https://nataliaszlag.github.io/"
                    />
                    <Card 
                        title="Animated Card"
                        icon={<FaIdCardAlt />}
                        body="Card element designed a'la Popdog, build in pure CSS"
                        link="https://animated-card-popdpgstyle.netlify.app/"
                    />
                    <Card 
                        title="Local bussiness"
                        icon={<FaPaperclip />}
                        body="Wedding invitation bussiness site done with WordPress"
                        link="https://kraftdesign.pl/"
                    />
                </div>
                <span className="tag-acc tag-r">{"</projects>"}</span>
        </div>
    )
}

export default Portfolio
