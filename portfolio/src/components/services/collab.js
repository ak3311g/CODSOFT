import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Collab(props){
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
                <h2><button className="backbutton text-white" onClick={props.exp}><span className="mx-5">Collaboration</span><FontAwesomeIcon icon={faChevronRight}/></button></h2>
                <div className="fs-5 my-4">
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">YouTube</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "50%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">Instagram</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "70%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">Stream</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "30%"}}></div>
                        </div>
                    </div>
                    <div className="skillvalue text-start fs-3">
                        <p className="ms-3 mt-3">Reel</p>
                        <div className="progress">
                            <div className="progress-bar" style={{width: "20%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}