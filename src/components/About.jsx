import "./About.css"
import userIcon from "../assets/userIcon.png";
const About = () => {

    return (
        <section id = "about" className="about-container">

            <h1 class = "title">About</h1>
            <img src={userIcon} alt="User Icon" className="user-image" />
        
            <section className="about-me">
                <p>I’m a problem solver at heart with a passion for technology, software development, and continuous learning. Based in Stockholm, I have a university background in Computer and Systems Sciences, with experience in building web applications using JavaScript, React, and Node.js for development purposes. I also work with Python and SQL for backend development and APIs, and I have experience with C# and Unity. I thrive in team environments, love collaborating, and always seek opportunities to grow. Outside of coding, I enjoy reading, the gym, and watching movies with my girlfriend. 
                    <br /><br />Feel free to check out my projects or reach out!

                </p>
            </section>

        </section>
    );

}
export default About;