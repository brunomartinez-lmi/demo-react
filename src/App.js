import React, {Component} from 'react';
import './App.css';
import Message from './components/Message/Message'
import WriteControl from './components/WriteControl/WriteControl'


class App extends Component{

  constructor(props) {
    super(props)

    // initial state
    this.state = {messageList: []}
  }

  sendHandler(text) {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const message = {
      author: "Me",
      time: time,
      text: text
    }

    const newList = [...this.state.messageList, message]
    this.setState({messageList: newList})
  } 

  render() {

    const messageComps = this.state.messageList.map( (msg, index) => {
      return <Message key={index} author={msg.author} time={msg.time}>{msg.text}</Message>
    })


    return (
      <div className="App">
        <WriteControl send={(text) => this.sendHandler(text)} />
        {messageComps}
      </div>
    );
  }
}

export default App;
