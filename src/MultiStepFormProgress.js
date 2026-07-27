import { useState } from "react"

function Progress(){
    const [CurrentStep,SetCurrentStep] =useState(1);
    return(
        <div className="container">
            <button onClick={()=>{
                if(CurrentStep<3){
                    SetCurrentStep(CurrentStep+1);
                }
            }}>+</button>
            <p>Set {CurrentStep} of 3</p>
            <button onClick={()=>{
                if(CurrentStep>0){
                    SetCurrentStep(CurrentStep-1);
                }
            }}>-</button>
        </div>
    )
}

export default Progress;