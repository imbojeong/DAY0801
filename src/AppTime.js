import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function AppTime() {

  const [time, setTime] = useState(0);

  const updateTime = () => {

    setTime(time +1); 

  }


  return (

  
    <div className="AppTime">


    <h2> {time} </h2>
    <button onClick={updateTime} > 시간 돌리기 </button>




    </div>
  );
}

export default AppTime;
