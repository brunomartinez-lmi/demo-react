import React from 'react';
import './App.css';
import Message from './components/Message/Message'
import WriteControl from './components/WriteControl/WriteControl'

const App = () => {

  return (
    <div className="App">
      <WriteControl />
      <Message author="Bruno" time="10:00:23">Hello World</Message>
      <Message author="Toto" time="10:05:23">Hi !</Message>
      <Message author="Titi" time="10:10:23">This is a very cool message</Message>
    </div>
  );
}

export default App;
