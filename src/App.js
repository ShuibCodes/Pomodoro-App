import './App.css';
import Timer from './Components/Timerr'
import TaskList from './Components/TaskList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="countdown-container">
        <h1>Pomodoro Timer</h1>
        <h3>Get Some Work Done!</h3>
        <Timer/>
        </div>
        <div className="tasklist-container">
        <h2>Task-List</h2>
        <TaskList/>
      </div>
      </header>
     
    </div>
  );
}

export default App;
