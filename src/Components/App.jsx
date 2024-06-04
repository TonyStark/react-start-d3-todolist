import { useState } from "react";
import UI from "./UI";
function App() {
  let [arr,setArray]=useState([])
  let [task,setTask]=useState("")
  let handleChange=(e)=>{
    setTask(e.target.value)
    // console.log(task)
  }
  let handleClick=()=>{
    let obj={
      task:task,
      finished:false
    }
    setArray([...arr,obj])
    console.log(arr)

  }
  
  return (
    <UI arr={arr} tasl={task} handleChange={handleChange} handleClick={handleClick}/>
  );
}

export default App;
