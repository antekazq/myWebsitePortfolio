import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";


function App() {
    return (
        <>
            <Home /> 
            <div id="including-navbar-container">
                <Navbar />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
