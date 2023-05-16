import React from "react";
import "./index.css"

//imgs

import myPhoto from "./imgs/about_me_img.webp"
import BrazilFlag from "./imgs/brazil-flag.webp"

 //downloads

 import CV from "./downloads/pedromoore-cv.pdf"
const PedroMoore = () => {

    const scrollToSection = () => {
        let contactSection = document.querySelector("#contact")
        contactSection.scrollIntoView({behavior: "smooth"})
    }

    return(
        <section id="home" className="home">
            <div className="pedromoore_about ">
                <div className="block_left theme scroll_effect_left active">
                    <div className="pedromoore_img_info">
                        <div className="pedromoore_img">
                            <img src={myPhoto} alt="" />
                        </div>
                        <div className="pedromoore_info">
                            <h4>Pedro Renna Moore</h4>
                            <p>FullStack Developer</p>
                            <p>Sorocaba, Brazil</p>
                            <p>moorerpedro@gmail.com</p>
                            <p>+55 15 99260-5191</p>
                            <p className="nactionality"> Brazilian <img src={BrazilFlag} width="20px"  alt="" /></p>
                        </div>
                    </div>
                    <div className="pedromoore_skills">
                        <div className="code_skills">
                            <h4>Skills</h4>
                            <ul>
                                <li><p>HTML5</p></li>
                                <li><p>CSS3</p></li>
                                <li><p>JavaScript</p></li>
                                <li><p>React</p></li>
                                <li><p>Rest APIs</p></li>
                                <li><p>Git / GitHub</p></li>
                                <li><p>Node(Express)</p></li>
                                <li><p>MongoDB</p></li>
                                <li><p>MySQL</p></li>
                                <li><p>WebSocket(socket.io)</p></li>
                                <li><p>Wordpress</p></li>
                            </ul>
                        </div>
                        <div className="language_skills">
                            <h4>Languages</h4>
                            <ul>
                                <li><p>Portuguese - Native</p></li>
                                <li><p>English - Advanced</p></li>
                            </ul>
                        </div>
                    </div> 
                    </div>
                <div className="block_right theme scroll_effect_right active">
                    <div className="pedromoore_text">
                        <h4>About me</h4>
                        <p>Hello, I'm a self-taught Fullstack Developer who has dedicated a lot of effort to achieve my current level of knowledge and skill. While on an exchange program in Ireland, I began studying programming and have since gained experience in various web development technologies and tools, such as HTML, CSS, JavaScript, React, Node.js, and MySQL, among others. I have worked on a range of projects, from small sites to complex applications using databases, servers, and websockets.</p>

                        <p>I am passionate about technology and am always seeking to learn more. I believe that knowledge is the key to success in the web development field, which is why I invest a lot of time in staying up-to-date and acquiring new skills. I have strong teamwork skills, am proactive, and enjoy taking on challenges. I am also skilled at meeting deadlines and delivering high-quality results.</p>

                        <p>I am currently seeking new projects and opportunities to continue growing in my career as a Fullstack Developer. If you are looking for a dedicated and committed professional with strong technical skills, please do not hesitate to contact me. I am excited to hear about your projects and how I can help make them a reality.</p>

                    </div>
                    <div className="pedromoore_buttons">
                        <button className="about_button" onClick={() => scrollToSection()}>Contact Me</button>
                        <button className="download_button" href={CV} download="Pedro Moore CV" onClick={() => scrollToSection()}>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PedroMoore;