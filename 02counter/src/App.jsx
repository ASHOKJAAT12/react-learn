import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setcounter] = useState(0);

  const addvalue = () => {
    setcounter(counter+1);
  }

  const delvalue= () =>{
    setcounter(counter-1);
  }


  return (
    <>
      <h1>Counter App</h1>
      <p>counter value : {counter}</p>
      <button onClick={addvalue}>Increment</button>{" "} 
      <button onClick={delvalue}>Decrement</button>
    </>
  )
}

export default App
