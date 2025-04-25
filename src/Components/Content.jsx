import React from "react";
import { useState } from "react";

function Content (props){

    return(

        <>
        <label>
            Task Input Area:
        </label>
        <br/>
        <input type="text" value={props.input} onChange={props.handleInput} placeholder="Enter Your Task"/>
  
        </>
    )
}

export default Content;