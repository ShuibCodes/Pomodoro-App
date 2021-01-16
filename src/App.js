
import React from 'react'
import './App.css';
import Timer from './Components/Timerr'
import Typography from "@material-ui/core/Typography"


function App() {


  return (
    <div className="App">
   
      <Typography 
        variant="h5"
        style={{padding: 3}}>
       
        </Typography>
        <div className="countdown-container">
        <Timer/>
        </div>
      
     
    </div>
  );
}

export default App;
