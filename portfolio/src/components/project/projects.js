import ProjectTab from "./projecttab";
import data from "../projectsdetails.json";

export default function Projects() {

    const projectList = data.projects;

    return (
        <>
            <div id="projects" className="top-space"/>
            <div className="projects">
            <h1 className='text-center text-white my-5 fw-bolder' id="projects">PROJECTS</h1>
                <ul>
                    {projectList.map((project) =>
                        <li key={project.link}>
                            <ProjectTab 
                                name={project.name} 
                                image={project.image}
                                description={project.description} 
                                startdate={project.start}
                                enddate={project.end}
                                status={project.status}
                                tech={project.technology}
                                link={project.link}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}