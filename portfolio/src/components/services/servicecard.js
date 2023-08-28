import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./services.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function ServiceCard(props) {
    if(props.id%2===0)
    {
        return (
            <>
                <div className="container">
                    <div className="servicecard text-white">
                        <div className="servicecardhead">
                            <h2>{props.name}</h2>
                        </div>
                        <div className="servicecardbody">
                            <img src={props.logo} alt="logo" className="mb-3"/>
                            <FontAwesomeIcon icon={faCode} size="7x" className="mb-5"/>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
                <div className="container">
                    <div className="servicecard text-white">
                        <div className="servicecardhead">
                            <h2>{props.name}</h2>
                        </div>
                        <div className="servicecardbody">
                            <img src={props.logo} alt="logo" className="mb-3"/>
                            <FontAwesomeIcon icon={faCode} size="7x" className="mb-5"/>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}