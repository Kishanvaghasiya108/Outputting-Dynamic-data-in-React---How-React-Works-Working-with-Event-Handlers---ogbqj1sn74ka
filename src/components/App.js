import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const[value,setValue] = useState("");
  const[final,setFinal] = useState("____");

  function inputHandler(e){
    setValue(e.target.value);
  }
  function clickHandler(){
    setFinal(value);
    setValue("");
  }
//code here

  return (
    <div id="main">
      <input id='input' onChange={inputHandler} value={value}></input>
      <button id='button' onClick={clickHandler}>Click</button>
      <p id='text'> Hello my name is {final} and I study at Newton School</p>
    </div>
  )
}


export default App;
