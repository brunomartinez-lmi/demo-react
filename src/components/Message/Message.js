import React from 'react'
import './Message.css'

const Message = (props) => {
    return (
        <div className="Message">
            <p className="Name">{props.author}</p>
            <p className="Time">{props.time}</p>
            <p className="Text">{props.children}</p>
        </div>
    )
}

export default Message
