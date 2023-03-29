import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./index.css"

// fontAwesome

import { faHouseUser, faUser, faDiagramProject, faEnvelope  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import leetCodeImg from "./img/leetcode.png"

//components

import SocialIcons from "../socialIcons";


const links = [
    { id: "home", label: "Pedro Moore", href: "#home", mobileIcon: faHouseUser},
    { id: "github", label: "GitHub", href: "#github", mobileIcon: faGithub },
    { id: "leetcode", label: "LeetCode", href: "#leetcode", mobileIcon: leetCodeImg },
    { id: "projects", label: "Projects", href: "#projects", mobileIcon: faDiagramProject},
    { id: "contact", label: "Contact", href: "#contact", mobileIcon: faEnvelope}
]


//debaunce 

const debounce = (fn, delay) => {
    let timerId;
    return function(...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.apply(this, args);
            timerId = null;
        }, delay);
    };
};

const Nav = () => {

    const [ activeLink, setActiveLink ] = useState(links[0].id)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleActiveLink = debounce(() => {
            links.forEach(link => {
                let section = document.querySelector(link.href)
                let sectionFromTop = section.getBoundingClientRect().top
                if(sectionFromTop < 180 && sectionFromTop > -300) {
                   setActiveLink(link.id)
                }
            })
            
        if(Math.abs(document.body.getBoundingClientRect().top) === (document.body.scrollHeight - window.innerHeight)) setActiveLink("contact")
        }, 50)
            
        const handleResize = debounce(() => {
            let windowWidth = window.innerWidth
            if(windowWidth < 1000) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }, 30)

        let windowWidth = window.innerWidth
        if(windowWidth < 1000) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
            
        window.addEventListener('scroll', handleActiveLink)
        window.addEventListener('resize', handleResize)
        return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleActiveLink);
        };
        
    }, [])

    const renderMobileLink = (link) => {
        if(link.id !== "leetcode") {
            return <FontAwesomeIcon icon={link.mobileIcon}/>
        }
        return <img style={{width: "23px"}} src={link.mobileIcon} />
    }

    return(
        <div className="menu">
            <nav>
                <ul>

                    {links.map(link => {
                        return <li className={`nav_item_${link.id}`} key={link.id}>
                            <Link
                            className={activeLink === link.id ? "nav_link active" : "nav_link"}
                            to={link.href}
                            onClick={() => {
                                    setActiveLink(link.id)
                                    let firstElementSize = 90
                                    let otherElementsSize = -50
                                    let target = document.querySelector(link.href).getBoundingClientRect().top + window.pageYOffset - (link.id !== "home" ? otherElementsSize : firstElementSize);
                                    window.scrollTo({top: target, behavior: 'smooth'})
                            }}
                            >{isMobile ? renderMobileLink(link) : link.label}</Link>
                        </li>
                    })}
                </ul>
            </nav>
            <SocialIcons color={"white"}/>
        </div>
    )
}

export default Nav;