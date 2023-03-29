import React, { useEffect, useState } from "react";
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import RepositoryIcon from "./imgs/git_hub.png"

import { getApiData } from "../../services/Api";

const apiURL = {
    events: "https://api.github.com/users/pedrorennamoore/events",
    repo: "https://api.github.com/users/pedrorennamoore/repos"
}

const Github = () => {

    const [gitHubEvents, setGitHubEvents] = useState([])
    const [gitRepositories, setGitRepositories] = useState([])
    
    useEffect(() => {
        getApiData(apiURL.events)
        .then(response => {
            setGitHubEvents(response.data)
        })
        getApiData(apiURL.repo)
        .then(response => {
            setGitRepositories(response.data)
        })
    }, [])

    function changeLanguageColor(language) {
        if(language === "HTML") {return "language-color html"}
        if(language === "JavaScript") {return "language-color javascript"}
        if(language === "CSS") {return "language-color css"}
    }

    return(
        <div id="github" className="github">
            <div className={`github_content scroll_effect_right`}>
                <div className="github_header">
                    <div className="header_icon">
                        <FontAwesomeIcon icon={faGithub} fontSize="30" className="leet_code_icon" color="white" />
                        <h3>GitHub</h3>
                    </div>
                </div>
                <div className="github_body theme">
                    <div className="github_repositories_content">
                            <div className="repositories_title">
                                <img width="15" src={RepositoryIcon} alt="" />
                                <h4>Repositories</h4>
                            </div>
                            <div className="github_repositories">
                                <ul>
                                    {gitRepositories.map(repository => {
                                        return <li key={repository.id}>
                                                    <h3><a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={`https://github.com/PedroRennaMoore/${repository.name}`}>{repository.name}
                                                    </a></h3>
                                                    <div className="github_repository_info_two">
                                                        <p>Created: <b>{repository.created_at.slice(0, 10)}</b></p>
                                                        <p>Owner: <b>{repository.owner.login}</b></p>
                                                        <div className="repository_language">
                                                            <p><b>{repository.language}</b></p>
                                                            <span className={changeLanguageColor(repository.language)}></span>
                                                        </div>
                                                    </div>
                                                </li>
                                    })}
                                </ul>
                            </div>
                    </div>
                    <div className="last_github_content">
                        <div className="last_title">
                            <img width="15" src={RepositoryIcon} alt="" />
                            <h4>Lasts Contributions</h4>
                        </div>
                        <div className="github_last_contributions">
                            <ul>
                                {gitHubEvents.filter((element, index) => index <= 10).map(gitEvent => {
                                    return <li key={gitEvent.id}>
                                                <h3><a target="_blank" rel="noreferrer" href={`https://github.com/PedroRennaMoore/${gitEvent.repo.name.slice(16)}`}>{gitEvent.repo.name.slice(16)}</a></h3>
                                                <p>Date: <b>{gitEvent.created_at.slice(0, 10)}</b> Hour: <b>{gitEvent.created_at.slice(11,16)}</b> {gitEvent.type} </p>
                                           </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Github