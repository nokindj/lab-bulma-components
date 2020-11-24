import React from 'react';
import 'bulma/css/bulma.css';
import NavBar from "./components/navbar/NavBar"
import FormField from "./components/formfield/FormField"
import CoolButton from "./components/button/CoolButton"
import Signup from "./components/Signup"

function App () {
  return (
    <div className="App">
    {/* <NavBar />
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <CoolButton className="button is-rounded my-class is-danger is-small" name="Login"></CoolButton>
    <CoolButton className="button is-small is-success" name="Signup"></CoolButton> */}
    <Signup />
    </div>
  ) 

};

export default App;
