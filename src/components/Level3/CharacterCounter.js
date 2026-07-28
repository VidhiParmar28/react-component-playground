import { useState } from "react"

function CharacterCounter(){
const [currentCharacter,setCurrentCharacter] = useState("");
    return(
        <div className="container">
            <input type="text" placeholder="write a character.." value={currentCharacter} onChange={(event)=>setCurrentCharacter(event.target.value)}/>
            <div className="showcharacter" style={{padding:"50px"}}>
                You have type [ {currentCharacter} ] Character
                <br />
                length is {currentCharacter.length}
            </div>
        </div>
    )
}

export default CharacterCounter;