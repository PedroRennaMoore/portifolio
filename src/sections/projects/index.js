import React from "react";
import "./index.css"

import ThisWebsiteImg from "./imgs/this_website.png"
import FlawlessCleanImg from "./imgs/flawlessclean.png"
import apiTesterImg from "./imgs/api-tester.png"
import chatOnline from "./imgs/chat-online.png"


const myProjects = [
    {name: "This Website", img: ThisWebsiteImg, technologies: "HTML | CSS | JavaScript | React | REST API", url: "https://pedromoore-portifolio.web.app", repo: "https://github.com/PedroRennaMoore/portifolio"},
    {name: "Flawless Clean", img: FlawlessCleanImg, technologies: "HTML | CSS | JavaScript", url: "https://flawlessclean-1234.web.app/", repo: ""},
    {name: "api-tester", img: apiTesterImg, technologies: "HTML | CSS | JavaScript | React | REST API", url: "https://api-tester-b9e21.web.app/", repo: "https://github.com/PedroRennaMoore/api-tester"},
    {name: "Real Time WebChat", img: chatOnline, technologies: "Technologies used: HTML | CSS | JavaScript | React | WebSocket | Node.js | MySQL", url: "https://chat-pedromoore.web.app/", repo: "https://github.com/PedroRennaMoore/chat-client"}

]

const Projects = () => {

    function checkPrivateRepo(repo) {
        if(repo !== "") {
            return <p><a target="_blank" rel="noreferrer" href={repo}>Repo</a></p>
        } else {
            return <p>Private Repository</p>
        }
    }
    
    return(
        <div id="projects" className="projects">
            <div className={`projects_content scroll_effect_right`}>
                <div className="my_projects_header">
                    <div className="my_projects_title">
                            <p>Take a look at my</p>
                            <div className="project_title_line"></div>
                            <h4>Projects</h4>
                    </div>
                </div>
                <div className="my_projects_body theme">
                    <div className="my_projects_itens">
                        <ul>
                            {myProjects.map(project => {
                                return <li key={project.name} className={`projects_item`}>
                                            <h4>{project.name}</h4>
                                            <div className="project_img">
                                                <img src={project.img} alt="" />
                                            </div>
                                            <div className="project_technologies">
                                                    <p className="project_technologies_tech">{project.technologies}</p>
                                            </div>
                                            <div className="project_links">
                                                    <p><a target="_blank" rel="noreferrer" href={project.url}>Live</a></p>
                                                    {checkPrivateRepo(project.repo)}
                                            </div>
                                       </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;