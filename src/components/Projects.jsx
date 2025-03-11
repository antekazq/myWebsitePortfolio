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

            <h2 className="donkeykong-project">Donkey Kong Arcade</h2>
            <p>I developed this recreation of the classic Donkey Kong arcade game using C# and MonoGame, 
                applying object-oriented programming principles. Check out a sample video below!</p>
            <video className="project-video" controls>
                <source src="/videos/DonkeyKong.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <h2 className="pacman-project">Pac-Man</h2>
            <p>I built this Pac-Man remake in C# and MonoGame with an OOP-based structure, featuring tile-based movement,
                randomized ghost behavior, and frame-based animations. Check out a sample video below!</p>
            <video className="project-video" controls>
                <source src="/videos/PacManFinal.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

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