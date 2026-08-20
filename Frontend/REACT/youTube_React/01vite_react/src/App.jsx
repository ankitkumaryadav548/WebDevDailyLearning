// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/cards'

function App() {

  let Myobj = {
    username:"Ankit",
    age:21
  }

  let arr = [1,2,4,5,6]

  return (
    <>
     <h1 className='bg-green-300 text-black p-4 rounded-2xl'>Tailwind Test</h1>
     <Card userName="chai or react" someObj = {Myobj} someArr = {arr}  />
     <Card/>
    </>
  )
}

export default App


