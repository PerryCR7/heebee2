import React from 'react';
import { useStopwatch } from 'react-timer-hook';
function MyStopwatch() {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: true });
  
  
    return (
      
        <div style={{display:"inline"}} >
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
   
     
    );
  }
  

const Stopwatch = (props) => {
    return (
     
          <MyStopwatch />
     
      );
}
export default Stopwatch;