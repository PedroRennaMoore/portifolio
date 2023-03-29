import React, {useState} from "react";
import "./index.css"

import FormInput from "../../components/formInputs";
import { send } from "emailjs-com";
import SocialIcons from "../../components/socialIcons/index";

const Contact = () => {

    const [initialInputValues, setInitialInputValues] = useState({
        form_name: "",
        form_email: "",
        form_msg: ""
    })

    const [inputValues, setInputValues] = useState(initialInputValues)

    function handleChange(e) {
        setInputValues({
            ...inputValues,
            [e.target.id] : e.target.value
        })
    }

    function sendEmail(e) {
        e.preventDefault()
        let inputConfirm = Object.values(inputValues).filter(input => input === "" )
        let errorElement = document.querySelector(".form-error-log")
        if(inputConfirm.length !== 0) {
            errorElement.style.color = "red"
            errorElement.innerText = "All fields must be filled in"
            
        } else {
            send("service_b9lia9q", "template_55225xb", inputValues, "U75e4G0n9l6HDRMfb").then(result => {
                errorElement.style.color = "green"
                errorElement.innerText = "Your message has been sent"
                setInputValues(initialInputValues)

            }).catch(error => {
                errorElement.style.color = "red"
                errorElement.innerText = "There was a problem sending your message"
            })
        }
    }

    return(
        <div id="contact" className="contact">
            <div className={`contact_content`}>
                <div className={`contact_info scroll_effect_left`}>
                    <SocialIcons color="#313638"/>
                    <div className="contact_email">
                        <p>moorerpedro@gmail.com</p>
                    </div>
                    <div className="my_status">
                        <div className="board">
                            <div className="board_neon">
                                <p>OPEN TO WORK</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`contact_form theme scroll_effect_right`}>
                    <h3>CONTACT</h3>
                    <form onSubmit={sendEmail}>
                        <FormInput className="theme_two" onchange={handleChange} span="name" type="text" name="form_name" id="form_name" value={inputValues.form_name}/>
                        <FormInput className="theme_two" onchange={handleChange}  span="email" type="email" name="form_email" id="form_email" value={inputValues.form_email}/>
                        <textarea className="theme_two" onChange={handleChange} name="form_msg" id="form_msg" cols="30" rows="10" value={inputValues.form_msg} placeholder="Type your message here"></textarea>
                        <p className="form-error-log"></p>
                        <input className="submit_button" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact