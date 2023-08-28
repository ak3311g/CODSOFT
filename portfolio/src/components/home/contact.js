import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";
import {faGithub, faHackerrank} from "@fortawesome/free-brands-svg-icons";


export default function Contact() {
    return (
        <>
            <div id="contacts" className="top-space"/>
            <div className="contact-block" id="contacts">

                    {/* Left-Block */}
                    <div className="left">
                        {/* Left Upper Block */}
                        <div className="left-upper">
                            <div className="left-upper-heading">
                                <h3>Let's discuss</h3>
                                <h3>Something fun!</h3>
                            </div>
                        </div>

                        {/* Left Middle Block */}
                        <div className="left-mid">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                <a href="mailto:ak3311g@gmail.com">ak3311g@gmail.com</a>
                            </div>
                            <button className="linkedin-button">
                             <a href="https://www.linkedin.com/in/rfankit23/" target="_blank" rel="noreferrer">
                             LinkedIn
                            </a>
                            </button>
                        </div>

                        {/* Left Bottom Block */}
                        <div className="left-bottom">
                            <a href="https://github.com/ak3311g" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.hackerrank.com/ak3311g" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHackerrank} /> </a>
                            <a href="https://leetcode.com/ak3311g/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCode} /> </a>
                        </div>

                    </div>

                    {/* Right-Block */}
                    {/* <div className="right">
                        <div className="container">
                            <form className="form">
                            <p>form currently not working</p>
                                <input type="text" id="name" name="name" placeholder="Your Name" />

                                <input type="text" id="email" name="email" placeholder="Your Email" />

                                <textarea id="message" name="message" placeholder="Message" style={{ height: "200px" }}></textarea>

                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </div>
                    </div> */}
                </div>
        </>
    )
}