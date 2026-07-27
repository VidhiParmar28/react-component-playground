import { useState } from "react"

function ShowPasswordToggle(){
const [IsVisible,SetToVisible] = useState(false);

    return(
        <div className="container">
            <input type={IsVisible?"text":"password"} placeholder="type your password..."  />
            <button onClick={()=>SetToVisible(!IsVisible)}>{IsVisible?"🙈 Hide":"👁️ Show"}</button>
        </div>
    )
}


export default ShowPasswordToggle;
