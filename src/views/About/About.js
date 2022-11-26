import "./About.css"
import {Link} from "react-router-dom"

function About(){
    return(
        <div className="about-container">      
        <h1 className="about-heading">About</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        
        </div>
    )
}

export default About;