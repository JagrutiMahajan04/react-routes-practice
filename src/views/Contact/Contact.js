import "./Contact.css"
import {Link} from "react-router-dom"


function Contact(){
    return(
        <div className="contact-container">
        <h1 className="contact-heading">Contact us</h1>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        </div>
    )
}

export default Contact;