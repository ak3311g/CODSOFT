import { useState } from "react";
import Profile from "./images";
import Intro from "./introh";
import Skills from "./skill";
import "./home.css";
import Projects from "../project/projects";
import About from "../about/about";
import Contacts from "./contact";
import resume from "../../resume/resume.pdf";

export default function Home() {
    const [state, setState] = useState(true);

    const expand = () => {
        if (state === false)
            setState(true);

        else
            setState(false);
    }

    return (
        <>
            <div className="hometabs">
                <div className="always w-100">
                    <Intro />
                    <Profile />
                </div>
                <Skills st={state} exp={expand} />
            </div>
            <Projects />
            <About />
            <Contacts />
            <div className="download">
                <a href={resume} download="Resume" className="download-button">Download Resume</a>
            </div>
        </>
    )
}