import { useState } from "react"

function Counter() {
  //const stateM=  useState(10)
    const [state,setState]=  useState(10)
const componentName="Counter Component"
 // console.log(stateM);

function increment(){
  //let fn=stateM[1]
  setState(state+1)

}


function decrement(){
 
  setState(state-1)

}

  return (
    <>
    <h1>{componentName}</h1>
    <h1>{state}</h1>

    <button className="btn btn-primary" onClick={increment}>
        Increment
    </button>
    <br></br>

    <button className="btn btn-primary" onClick={decrement}>
        Decrement
    </button>
     
    </>
  )
}


export default Counter