import { useState } from 'react'

function App() {
  const [time, settime] = useState(new Date().toLocaleTimeString())
  // let date = new Date();
  const dt = () => {
    setInterval(() => {
        settime(new Date().toLocaleTimeString()) 
    },1000);  
  }
  return (
    <div className='bg-[#1a1a1a] w-full h-screen flex justify-center items-center'>
      <div className='bg-[#b8b5b5] p-20 rounded-2xl text-center gap-4 flex flex-col '>
        <div className='w-30 h-10 text-black flex justify-center items-center'>{time}</div>
        <button onClick={dt} className='bg-[#1a1a1a] p-2 rounded-2xl text-blue-50'>START</button>
      </div>
    </div>
  )
}

export default App
