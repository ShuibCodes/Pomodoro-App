
import React from 'react'
import './App.css';
import Timer from './Components/Timerr'
import MainTodo from './Components/TaskList/MainTodo'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <div className="countdown-container">
        <h1>Pomodoro Timer</h1>
        <h3>Get Some Work Done!</h3>
        <Timer/>
        </div>
        <MainTodo />
      </header>
     
    </div>
  );
}

export default App;
