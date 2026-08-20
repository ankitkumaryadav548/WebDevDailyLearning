
import { useState } from 'react'
import './App.css'

function App() {
  const [color , setcolor] = useState("olive")
  
  
  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundcolor:color}}>
      <div className="fixed flex flex-wrap
      justify-center bottom-12 insert-x-0 px-2" ></div>
     </div>
    </>
  )
}

export default App



