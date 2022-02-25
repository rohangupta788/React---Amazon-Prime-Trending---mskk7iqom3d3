import React, {Component, useState} from "react";
import '../styles/App.css';

const App = ({slides}) => {

  const [index,setIndex] = useState(0);

  const data = slides[index];
  console.log(data);

  return (
    <div>
   <h1 data-testid="title">{data.title}</h1>
   <p data-testid="text">{data.text}</p>
   {index!==0 ?<button data-testid="button-prev"
   onClick={()=>{setIndex(index-1)}}>Prev</button> :null}

   {index!==slides.length-1?<button data-testid="button-next"
   onClick={()=>{setIndex(index+1)}}>Next</button>: null}

{index!==0 ? <button data-testid="button-restart"
onClick={()=>{setIndex(0)}}>Restart</button>:null}

    </div>
  )
}


export default App;
