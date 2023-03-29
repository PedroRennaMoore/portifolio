import React, { useEffect, useState } from "react";
import "./index.css"

import Sun from "./imgs/sun.png"
import Moon from "./imgs/moon.png"


const DarkLightMode = () => {

    const [theme, setTheme] = useState("sun")
    const [themeMode, setThemeMode] = useState("light")

    const swapButton = () => {
        let button = document.querySelector(".switch_button")
        let background = document.querySelector(".dark_light_mode")
        
        if(theme === "sun") {
            setThemeMode("dark")
            changeTheme("")
            background.className = "dark_light_mode moon"
            button.className = "switch_button moon"
            setTheme("moon")
        } else {
            setThemeMode("light")
            changeTheme("_dark")
            background.className = "dark_light_mode sun"
            button.className = "switch_button sun"
            setTheme("sun")
        }
    }

    const changeTheme = (theme) => { 
        let themee = document.querySelectorAll(`.theme${theme}`)
        let themeTwo = document.querySelectorAll(`.theme_two${theme}`)
        let progressBar = document.querySelector(".total_progress_bar")
        let projectImg = document.querySelectorAll(".project_img")
        
        if(themeMode === "light") {
            document.body.backgroundColor = "black"
            if(progressBar) {
                progressBar.className = "total_progress_bar dark"
            }
            projectImg.forEach(img => {
                img.className = "project_img dark"
            })
            themee.forEach(item => {
                item.classList.replace("theme", "theme_dark")
            })
            themeTwo.forEach(item => {
                item.classList.replace("theme_two", "theme_two_dark")
            })
        } else {
            document.body.backgroundColor = "background-image: radial-gradient(#E0DFD5,rgb(166, 160, 160));"
            if(progressBar) {
                progressBar.className = "total_progress_bar"
            }
            projectImg.forEach(img => {
                img.className = "project_img"
            })
            themee.forEach(item => {
                item.classList.replace("theme_dark", "theme")
            })
            themeTwo.forEach(item => {
                item.classList.replace("theme_two_dark", "theme_two")
            })
        }
    }

    return(
        <div className="dark_light_mode sun">
            <div className="switch">
                <div className="switch_button" onClick={() => swapButton()}><img style={{transition: "all .5s"}} width={theme === "sun"? "35px": "25px"} src={theme === "sun" ? Sun : Moon}/></div>
            </div>
        </div>
    )
}

export default DarkLightMode