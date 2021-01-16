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
  useEffect(()=>{
  let myInterval = setInterval(() => {
          if (seconds > 1 && isActive) {
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
    
  }

  function reset(){
      setSeconds(0);
      setMinutes(initialMinute)
      setIsActive(false)
  }
  function timeChange(){
      let initialMinute = 15;
      setMinutes(initialMinute)
  }

function to30(){
      let initialMinute = 30;
      setMinutes(initialMinute)
  }
  
  function to45(){
    let initialMinute = 45;
    setMinutes(initialMinute)
}


 

  return (
    <div>
    <div className="Pomo-container" >
    { minutes === 0 && seconds === 0
        ? <h1 className="countdown">{minutes}: {seconds}{seconds}</h1> 
        : <h1 className="contdown"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    }

    <button onClick={toggle} className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Pause' : 'Start'}
    </button>
    <button   onClick={reset} >Reset</button>

    <NewTime  to45={to45} to30={to30}  timeChange={timeChange} />
    </div>
    <MainTodo toggle={toggle} reset={reset} />
    </div>
    
    
    
  )

};

export default Timer;