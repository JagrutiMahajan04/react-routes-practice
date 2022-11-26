import "./Home.css"
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="home-container">
        <h1 className="home-heading">HomePage</h1>
        
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        </div>
    )
}

export default Home;