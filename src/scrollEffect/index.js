import { useEffect } from "react";
import React from "react";
import "./index.css"

const ScrollEffect = () => {
    useEffect(() => {
        let nodeListLeft = document.querySelectorAll(".scroll_effect_left")
        let nodeListRight = document.querySelectorAll(".scroll_effect_right")
        let leftEffect = Array.from(nodeListLeft)
        let rightEffect = Array.from(nodeListRight)
        leftEffect.shift()
        rightEffect.shift()

        const activeScrollEffect = () => {
            leftEffect.forEach(left => {
                
                let elementTop = left.getBoundingClientRect().top
                if(elementTop <= 450 ) {
                    left.classList.add("active")
                    left.classList.remove("desactive")
                } else {
                    left.classList.replace("active", "desactive")
                }
            })
            rightEffect.forEach(right => {
                let elementTop = right.getBoundingClientRect().top
                if(elementTop <= 450 ) {
                    right.classList.add("active")
                    right.classList.remove("desactive")
                } else {
                    right.classList.replace("active", "desactive")
                }
            })
            
        }
        window.addEventListener("scroll", activeScrollEffect)
        return () => {
            window.removeEventListener("scroll", activeScrollEffect)
        }
    })
}

export default ScrollEffect