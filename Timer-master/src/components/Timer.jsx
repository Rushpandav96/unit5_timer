import { useState, useEffect } from "react";

function Timer({ initial_time, end_timer }) {
  const [time, setTime] = useState(+initial_time);
  
  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prevValue) => {
  
        if (prevValue+1 === +end_timer) {
          clearInterval(interval);
        }
        return prevValue + 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="timer">
      <b>
        Start time : <span><b>{initial_time}</b></span> End time:  <span><b>{end_timer}</b></span>
        </b>
      <h1>{time}</h1>
    </div>
  );
}

export default Timer;

