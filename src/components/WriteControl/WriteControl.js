import React from 'react'
import './WriteControl.css'

const WriteControl = (props) => {

    return (
        <div className="WriteControl">
             <label>Your message</label>
             <input type="text"></input>
             <button onClick={props.click}>Send</button> 
        </div>
    )
}

export default WriteControl
