import "./projecttab.css";
import React, { useEffect, useRef } from 'react';

const useItemCount = () => {
    const listRef = useRef(null);
  
    useEffect(() => {
      const listItems = listRef.current.querySelectorAll('.card .project-details .project-tech-list li');
      const itemCount = listItems.length;
      listRef.current.style.setProperty('--item-count', itemCount);
    }, []);
  
    return listRef;
  };

export default function ProjectTab(props) {
    const listRef = useItemCount();

    return (
        <>
            <div>
                <div className="card">
                        <p className="project-title">{props.name}</p>
                        <img className="project-image" src={props.image} alt="project" />
                        <div className="project-description">
                            <p>{props.description}</p>
                        </div>
                        <div className="project-details">
                            <pre className="project-date">{props.startdate}  to  {props.enddate}</pre>
                            <p className={`project-status ${props.status==='Active'?"red":"green"}`}>Status: {props.status}</p>
                            <p className="project-tech">Technology</p>
                            <ul ref={listRef} className="project-tech-list">
                                {props.tech.map((tech) =>
                                    <li key={tech} className="tech-list">{tech}</li>
                                )}
                            </ul>
                            <a className="project-link" href={props.link} target="_blank" rel="noreferrer">Link</a>
                        </div>
                    </div>
            </div>
        </>
    )
}