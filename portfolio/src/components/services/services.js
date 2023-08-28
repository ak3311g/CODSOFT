import ServiceCard from "./servicecard";
import "./services.css";
/* import { useState } from "react";
import Collab from "./collab"; */
import services from "../projectsdetails.json";

export default function Services() {
    /* const [state, setState] = useState(true);

    const expand = () => {

        if (state === false)
            {
                setState(true);
            }

        else
            {
                setState(false);
            }
    } */

    const servicedetals = services.services;

return (
    <>
        <div className="servicetab d-flex">
            <div className="always w-100">
                <div className="top-services">
                    <ServiceCard id={0} name = {servicedetals[0].name} logo = {servicedetals[0].logo}  content = {servicedetals[0].content}/>
                    <ServiceCard id={1} name = {servicedetals[1].name} logo = {servicedetals[1].logo}  content = {servicedetals[1].content}/>
                    <ServiceCard id={2} name = {servicedetals[2].name} logo = {servicedetals[2].logo}  content = {servicedetals[2].content}/>
                </div>
                {/* <Collab st={state} exp={expand} /> */} {/* Will Add Later */}
            </div>
        </div>

        </>
    )
}