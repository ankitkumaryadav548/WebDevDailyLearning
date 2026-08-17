import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {

   const [counter , setCounter] = useState(15)
  // let counter = 15
  const addValue = () =>{
    console.log("clicked",counter);
    // counter ++ 

    setCounter(prevCounter => prevCounter + 1) //it will update 1 by 1 every setCounter
    setCounter(prevCounter => prevCounter + 1) // if you will simply write couter++ , many 
    setCounter(prevCounter => prevCounter + 1) // time then it will not update (interview)
    setCounter(prevCounter => prevCounter + 1)
    if(counter<20)
    setCounter(counter+1)
    else 
      (counter>20)
       console.log("Not allowed")
     }
  
  const removeValue = () => {
    console.log("clicked",counter)
    if(counter>0)
    setCounter(counter - 1)
  else console.log("non-Negatve number")

  } 

  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}


export default App
