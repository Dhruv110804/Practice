
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState('')
 useEffect(()=>{
  fetch('http://localhost:3000/').then(data =>data.json()).then(data=>{
    console.log(data)
    setName(data.name)
  })
 })

  return (
    <>
    <h1>Name: {name}</h1>
    </>
  )
}

export default App
