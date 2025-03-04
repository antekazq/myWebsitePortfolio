import "./Projects.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Projects = () => {
    return (
        <section id = "projects" className="projects-container">
            <h1 className="title">Projects</h1>

            <h2 className="pubmed-project">PubMed API</h2>
            <p>Developed a web application for retrieving scientific articles from the
                PubMed API that saves data in a PostgreSQL database that I set up. Feel free to try a search
                term <a href="https://pubmedapi-0fl5.onrender.com" target="_blank" rel="noopener noreferrer">
                <u>here</u></a> </p>
            
            <h2 className="adventofcode-project">Advent of Code 2024</h2>
            <p> I challenge myself to develop my Python skills by efficiently solving
                programming problems from Advent of Code. I continuously post my solutions and
                documentation on GitHub, which can be found <a href="https://github.com/antekazq/AdventOfCode" target="_blank" rel="noopener noreferrer">
                <u>here</u></a>
            </p>
            <div className="projects-footer">
                <p>If you’d like to view more of my smaller projects and follow my updates, you can visit my GitHub and LinkedIn:</p>
                <div className="social-links">
                    <a href="https://github.com/antekazq" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </a>
                    <a href="https://linkedin.com/in/antonioazdanlouqajar" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </a>
                </div>
            </div>    
        </section>
    );

}
export default Projects;