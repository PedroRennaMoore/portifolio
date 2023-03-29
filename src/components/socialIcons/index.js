import React from "react";
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({color}) => {
    return(
        <div className="social_icons">
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/kryerzz">
                <FontAwesomeIcon icon={faInstagram} fontSize="30" className="leet_code_icon" color={color} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://github.com/PedroRennaMoore">
                <FontAwesomeIcon icon={faGithub} fontSize="30" className="leet_code_icon" color={color} />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pedrorennamoore/">
                <FontAwesomeIcon icon={faLinkedin} fontSize="30" className="leet_code_icon" color={color} />
            </a>
        </div>
    )
}

export default SocialIcons