import "./about.css";
import img from "../../images/profile.jpg"

export default function About() {
    return (
        <>
            <div id="about" className="top-space"/>
            <div>
                <h1 className='heading text-center text-white mb-5 fw-bolder'>ABOUT ME</h1>
                <div className="about-me">
                    <div className="img" style={{background:`url(${img})`}}/>
                    <p className="text-white">A dedicated programmer with an insatiable appetite for learning and acquiring new skills. My practical approach to learning empowers me to grasp concepts quickly and effectively. Known for my diligence, I take a proactive stance when facing challenges and strive to find innovative solutions. My collaborative nature makes me an asset in team settings, where I value open communication and cooperative problem-solving. Continuously evolving, I am committed to refining my existing skills while acquiring fresh ones, always seeking opportunities for personal and professional growth.</p>
                </div>
            </div>
        </>
    )
}