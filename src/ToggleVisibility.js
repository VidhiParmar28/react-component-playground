import { useState } from "react"

function ToggleVisibility(){
    const [isVisible,setIsVisible] = useState(false);
    return(
        <div className="toggle-container">
            <button onClick={()=>{setIsVisible(!isVisible)}}>Click</button>
            {isVisible ?  <p>Hello, i know react</p> : ""}
        </div>
    )
}


export default ToggleVisibility;