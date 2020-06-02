import React from 'react'
import './WriteControl.css'

const WriteControl = (props) => {

    return (
        <div className="WriteControl">
             <label>Your message</label>
             <input type="text" placeholder="type here"></input>
             <button>Send</button> 
        </div>
    )
}

export default WriteControl
