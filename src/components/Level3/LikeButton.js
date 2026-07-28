import { useState } from "react"

function Likebtn(){

    const [isClicked,setToClicked] = useState(false);
    let color;
    if(isClicked){
        color="red";
    }
    else{
        color="black";
    }
    return(
        <div className="container">
            <button onClick={()=>setToClicked(!isClicked)} style={{color:color}}>{isClicked?"❤️ Liked":"🤍 Like"}</button>
            
        </div>
    )
}

export default Likebtn;