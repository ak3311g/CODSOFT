import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./introh.css";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Skills(props) {
    
    if(props.st === true){
        return(
            <>
                <div className="expand skillhide">
                    <button className="expand-button" onClick={props.exp}><FontAwesomeIcon icon={faChevronLeft} /></button>
                </div>
            </>
        )
    }
    else
    return (
        <>
            <div className="container skillbox py-4 mt-5 skillshow">
                <h2><button className="backbutton text-white" onClick={props.exp}><span className="mx-5">SKILLS</span><FontAwesomeIcon icon={faChevronRight}/></button></h2>
                <div className="fs-5 my-4">
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">C++</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "80%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">HTML</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "90%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">CSS</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">JavaScript</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "60%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}