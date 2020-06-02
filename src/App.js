import React, {useState} from 'react';
import './App.css';
import Message from './components/Message/Message'
import WriteControl from './components/WriteControl/WriteControl'

const App = () => {

  const [messageList, setMessageList] = useState([])

  const sendHandler = (text) => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const message = {
      author: "Me",
      time: time,
      text: text
    }

    const newList = [...messageList, message]
    setMessageList(newList)
  }


  const messageComps = messageList.map( (msg) => {
    return <Message author={msg.author} time={msg.time}>{msg.text}</Message>
  })


  return (

    <div className="App">
      <WriteControl send={sendHandler} />
      {messageComps}
    </div>
  );
}

export default App;
