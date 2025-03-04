import "./Home.css";

const Home = () => {
    return (
        <section id = "home" className="home-container">
            
            <h1>
                Hello, my name is <span className="blue-text">Antonio</span>. 
            </h1>
            
            <div className="button-container">
                <a href="#about" className="about-button">About me &#x2193;</a>
            </div>
        </section>
    );
};
export default Home;
