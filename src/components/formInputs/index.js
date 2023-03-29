import React from "react";
import "./index.css"

function FormInput(props) {

    function changeSpanStyle(e) {
        let spanText = e.target.previousSibling
        spanText.style.fontSize = "10px"
        spanText.style.top = "25%"
    }

    function returnSpanStyle(e) {
        let spanText = e.target.previousSibling
        if(e.target.value !== "") {
            spanText.style.fontSize = "10px"
            spanText.style.top = "25%"
        } else {
            spanText.style.fontSize = "13px"
            spanText.style.top = "50%"
        }
    }

    return(
        <label className="form_input">
            <span>{props.span}</span>
            <input className="theme_two" onChange={props.onchange} onBlur={returnSpanStyle} onFocus={changeSpanStyle} type={props.type} name={props.name} id={props.id} value={props.value}/>
        </label>
    )
}

export default FormInput