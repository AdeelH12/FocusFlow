import react from "react";
import { useState } from "react";
 
function Timer (props){

    const minutes = Math.floor(props.timer / 60);
    const seconds = props.timer % 60;

    return(

        <>
        <div>

        <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>

        </div>
        <button onClick={props.running}>Start Timer</button>
        <button onClick={props.reset}>Reset Timer</button>

        <h1>{props.timer === 0 ? "Task Complete" : " "}</h1>

        {/* message.includes("Success") ? "green" : "red" */}
        </>
    )
}

export default Timer;