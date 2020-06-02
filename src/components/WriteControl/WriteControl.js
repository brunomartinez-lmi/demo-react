import React, {Component} from 'react'
import './WriteControl.css'

class WriteControl extends Component {

    constructor(props) {
        super(props)

        // initial state
        this.state = {message: ""}
    }

    textChangeHandler(event) {
        this.setState({message: event.target.value})
        console.log("New message: " + event.target.value)
    }

    clickHandler() {
        if (this.state.message) {
            this.props.send(this.state.message)
            this.setState({message: ""})
        }
    }

    render() {
        return (
            <div className="WriteControl">
                <label>Your message</label>
                <input type="text" onChange={(e) => this.textChangeHandler(e)} value={this.state.message}></input>
                <button onClick={() => this.clickHandler()}>Send</button> 
            </div>
        )
    }
}

export default WriteControl
