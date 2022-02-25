import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {

  const [index,setIndex] = useState(0);
  const [prev,setPrev] = useState("none")
  const [next,setNext] = useState("inline")
  const [restart,setRestart] = useState("none")

  const data = slides[index];

  useEffect(()=>{

    if(index===slides.length -1){
      setNext("none")
    } 

    else if(index!==0){
      setPrev("inline")
      setRestart("inline")
      setNext("inline")
    }
    else if(index===0){
      setPrev("none")
      setRestart("none")
      setNext("inline")
    }
  

  },[index])


  return (
    <div>
   <h1 data-testid="title">{data.title}</h1>
   <p data-testid="text">{data.text}</p>

   <button data-testid="button-restart" style={{display:restart}}
  onClick={()=>{setIndex(0)}}>Restart</button>

  <button data-testid="button-prev" style={{display:prev}}
   onClick={()=>{setIndex(index-1)}}>Prev</button>

  <button data-testid="button-next"
   style={{display:next}}
   onClick={()=>{setIndex(index+1)}}>Next</button>

 

    </div>
  )
}


export default App;
