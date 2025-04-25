import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useEffect,useState } from 'react';
import Timer from './Components/Timer';
import Content from './Components/Content';

function App() {

  const [input, setInput] = useState('');
  const [timer, setTimer] = useState(1500); // 25 miutes * 60 = 1500 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let interval;

    if(isRunning && timer > 0){

      interval = setInterval(() => {

        setTimer((prevTimer) => prevTimer - 1);
      }, 1000)

    
    }
  
    //checking to see if time has hit zero
    if(timer === 0){
      
      //do not set timer to 1500 seconds, otherwise it will set the timer back as soon as it hits 0:00 Which we dont want, because we want the 'Task Complete' text to appear
        setIsRunning(false)
  
    }

    return() => clearInterval(interval);
   
    // runs only on mount + when the value changes
  }, [isRunning, timer])

  function running() {
    if (input.trim() === "") {
      alert("Please enter a task!");
    } else {
      setIsRunning(true);
    }
  }
  function reset(){

    if(reset){

      setTimer(1500);
      setIsRunning(false);
      setInput('')
    }
   
  }

  function handleInput(e){

      setInput(e.target.value);
  }


  return (
    <div className="App">
      <div>
        <Header/>
      </div>
       <Content input={input} handleInput={handleInput} />
       
       <div>
       <Timer reset={reset} running={running} timer={timer}/>
        </div>
    </div>
  );
}

export default App;
