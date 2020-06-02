import React, {useState} from 'react'
import './WriteControl.css'

const WriteControl = (props) => {

    const [message, setMessage] = useState("")

    const textChangeHandler = (event) => {
        setMessage(event.target.value)
        console.log("New message: " + event.target.value)
    }

    const clickHandler = () => {
        if (message) {
            props.send(message)
            setMessage("")
        }
    }


    return (
        <div className="WriteControl">
             <label>Your message</label>
             <input type="text" placeholder="type here" onChange={textChangeHandler} value={message}></input>
             <button onClick={clickHandler}>Send</button> 
        </div>
    )
}

export default WriteControl
