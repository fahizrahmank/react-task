import React from "react";
import './contact.css'

function Contact(props){
var uc = props.name.toUpperCase();
    return(
        <div style={  {color:"red",padding:20}}>


            <h1>{uc}CONTACT PAGE</h1>
            <label>email adress</label>
            <input type="text" />
            <br />
            <label>message</label>
            <textarea>
            </textarea>
            <button>send</button>

        </div>
    )
}
export default Contact;