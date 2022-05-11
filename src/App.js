import './App.scss';
import React from "react"

const App = () => {
  const handleClick = () =>{
    let boxContainerStyle = document.querySelector(".boxContainer").style;
    let original = window.innerWidth> 480 ? "row": "column";
    let reverse = window.innerWidth> 480 ? "row-reverse": "column-reverse";
    if(boxContainerStyle.flexDirection === reverse){
      boxContainerStyle.flexDirection = original
    } else{
      boxContainerStyle.flexDirection = reverse;
    }
  }
  return (
    <div className="container">
        <button className = "button" onClick = {handleClick}>Button</button>
        <div className = "boxContainer">
            <div className = "box1">Text that need to be absolute center is this</div>
            <div className = "box2">Another Text to take a look at</div>
        </div>
    </div>
  );
}

export default App;
