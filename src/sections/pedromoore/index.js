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
                            <p>Frontend Developer</p>
                            <p>Cork, Ireland</p>
                            <p>moorerpedro@gmail.com</p>
                            <p>+353 083 201 4007</p>
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
                        <p>As a passionate and self-taught Front-end developer, I have honed my skills in crafting responsive websites utilizing HTML5, CSS3, JavaScript, and leveraging the power of React as my go-to JS framework.</p>
                        <p>Using Node.js ( Express ) for backend servers and MongoDB as NON-Relational Database.</p>
                        <h4>Past Experiences</h4>
                        <p>Over the past 3 years, I have been thriving as a freelancer, building bespoke websites that align with my clients' unique needs and desires. Engaging directly with customers has not only sharpened my communication skills but also granted me the ability to guide clients in articulating their ideas more effectively.</p>
                        <h4>Future</h4>
                        <p>My love for web development is boundless, but I quickly found myself feeling constrained by the limitations of Wordpress Themes. Eager to design and develop any kind of website, I embarked on a journey to master Full Stack Development, expanding my horizons and unlocking my true potential.</p>
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