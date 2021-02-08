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

    function rest(){
      let initialMinute = 5
      let initialSeconds= 0;
      setMinutes(initialMinute);
      setSeconds(initialSeconds)
    }

 

  return (
    <>
    <header>
    <h2 className="title" >Pomodoro Timer</h2>
    <h3>Add a task, start the clock</h3>
    </header>

      <div class="containerr">
      <h2   className={isActive ? 'greentext' : null} >{isActive && minutes !== 0 ? null : null}</h2>
    <div className="Pomo-container" >
    { minutes === 0 && seconds === 0
        ? <h2>{rest()}</h2>
        : <h1 className={isActive ? 'green' : 'countdown'}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
    }

    <button style={{width: "200px", height: "100px", fontSize: "50px"}} onClick={toggle}  className={`  maintwo button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Pause' : 'Start'} 
    </button>
    <button style={{width: "200px", height: "100px", fontSize: "50px"}} className={`button rbutton-primary rbutton-primary-${isActive ? 'active' : 'inactive'}`}  onClick={reset} >Reset</button>
 
    {/* <NewTime  to45={to45} to30={to30}  timeChange={timeChange} /> */}
  
    </div>
      <div className="flex2" >
      <MainTodo toggle={toggle} reset={reset}/>
      </div>
    
    </div>
    
    </>
    
    

    
    
  )

};

export default Timer;