import { useState } from "react";

function ColorSwitcher(){
    const colors = ["red","blue","green"]
    const [ColorIndex,SetColorIndex]=useState(0);
  

    return(
        <div className="container"  style={{backgroundColor:colors[ColorIndex],padding:"50px"}}>
            <button className="btn"  onClick={()=>{SetColorIndex((ColorIndex+1)% colors.length)}}>Button</button>
        </div>
    );
}

export default ColorSwitcher;
