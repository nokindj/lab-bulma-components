import React from "react";
import 'bulma/css/bulma.css';
import NavBar from "./navbar/NavBar"
import FormField from "./formfield/FormField"
import CoolButton from "./button/CoolButton"
import './formfield/FormField.css';


function Signup() {
    return (   
        <div>
            <NavBar />
            <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
            <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
            <FormField label="Password" type="password" />
            <CoolButton className="button is-rounded my-class is-danger is-small" name="Submit"></CoolButton>
        </div>
    )
}



export default Signup;