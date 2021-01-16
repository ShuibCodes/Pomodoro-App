import React, {useState,useEffect} from 'react';
import '../index.css'
import MainTodo from '../Components/TaskList/MainTodo'
import NewTime from './TaskList/NewTime';


const Timer = () => {
  let initialMinute = 25;
  let initialSeconds = 0;
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);
  const [isActive, setIsActive] = useState(false)
  const [isGreen, setIsGreen] = useState(false)
  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (seconds > 0 && isActive) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0 && isActive) {
              if (minutes === 0 && isActive) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
                  
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
  },[seconds,minutes, isActive]);
  
  function toggle(){
    setIsActive(!isActive);
    setIsGreen(!isGreen);
  }

  function reset(){
      setSeconds(initialSeconds);
      setMinutes(initialMinute)
      setIsActive(false)
  }
  function timeChange(){
      let initialMinute = 15;
      setMinutes(initialMinute);
      let initialSeconds = 0;
      setSeconds(initialSeconds)
  }

function to30(){
      let initialMinute = 30;
      setMinutes(initialMinute)
      let initialSeconds = 0;
      setSeconds(initialSeconds)
  }
  
  function to45(){
    let initialMinute = 45;
    let initialSeconds = 0;
    setMinutes(initialMinute)
    setSeconds(initialSeconds)
}


 

  return (
    <div>
    <h2 className={isActive ? 'greentext' : null} >{isActive && minutes !== 0 ? 'Get Some Work Done' : 'Pomodoro App'}</h2>
    <div className="Pomo-container" >
    { minutes === 0 && seconds === 0
        ? <h4 className="break" >Take a Break! you've earned it</h4>
        : <h1 className={isActive ? 'green' : 'countdown'}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    }


    <button onClick={toggle}  className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Pause' : 'Start'} 
    </button>
    <button className={`button rbutton-primary rbutton-primary-${isActive ? 'active' : 'inactive'}`}  onClick={reset} >Reset</button>

    <NewTime  to45={to45} to30={to30}  timeChange={timeChange} />
  
    </div>
    <MainTodo toggle={toggle} reset={reset} />
    </div>
    
    
    
  )

};

export default Timer;