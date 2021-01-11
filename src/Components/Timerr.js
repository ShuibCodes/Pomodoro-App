import React, {useState,useEffect} from 'react';
import '../index.css'

const Timer = () => {
  const initialMinute = 25;
  const initialSeconds = 0;
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
      setMinutes(25)
      setIsActive(false)
  }

  

  return (
    <div>
    { minutes === 0 && seconds === 0
        ? <h1>{minutes}: {seconds}{seconds}</h1> 
        : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    }
    <button onClick={toggle} className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Pause' : 'Start'}
    </button>
    <button className='button' onClick={reset} >Reset</button>
    
    </div>
    

  )

};

export default Timer;