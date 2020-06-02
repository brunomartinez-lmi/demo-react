import React, {useState} from 'react'
import './WriteControl.css'

const WriteControl = (props) => {

    const [message, setMessage] = useState("")

    const textChangeHandler = (event) => {
        setMessage(event.target.value)
        console.log("New message: " + event.target.value)
    }

    
    return (
        <div className="WriteControl">
             <label>Your message</label>
             <input type="text" placeholder="type here" onChange={textChangeHandler}></input>
             <button onClick={() => props.send(message)}>Send</button> 
        </div>
    )
}

export default WriteControl
