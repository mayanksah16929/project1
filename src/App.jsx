import "./App.css";
// useState is Hook
import {useState} from "react";


function App() {

  const [x,setCount]=useState(0);

  const addMe=()=>{
    setCount(x+1);
  }

  const subMe=()=>{
    setCount(x-1);
  }

  const multipleMe=()=>{
    setCount(x*2)
  }
  const divisionMe=()=>{
    setCount(x/2)
  }
  
  return (
    <> 

The value of x is {x}

<button onClick={()=>addMe()}>Add me </button>

<button onClick={()=>subMe()}>Sub me </button>

<button onClick={()=>multipleMe()}>multipleMe me </button>
<button onClick={()=>divisionMe()}>divisionMe</button>


    </>
  );
}

export default App;


