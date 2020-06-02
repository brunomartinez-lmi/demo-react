import React, {useState} from 'react';
import './App.css';
import Message from './components/Message/Message'
import WriteControl from './components/WriteControl/WriteControl'

const App = () => {

  const [message, setMessage] = useState({author: "Me", time: "10:10:01", text: ""})

  const sendHandler = (text) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setMessage({
      author: "Me",
      time: time,
      text: text
    })
  }

  return (

    <div className="App">
      <WriteControl send={sendHandler} />
      <Message author="Bruno" time="10:00:23">Hello World</Message>
      <Message author="Toto" time="10:05:23">Hi !</Message>
      <Message author={message.author} time={message.time}>{message.text}</Message>
    </div>
  );
}

export default App;
