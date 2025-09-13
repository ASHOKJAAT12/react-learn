import { useState } from 'react'

function App() {
  const [count, setCount] = useState('');
  const [answer,setanswer] = useState('');
  const obj = {
    key : "c++"
  }
  const run = () => {
    setCount(count);
    if(count == obj.key)
    {
      setanswer("your answer is right 😁");
    }
    else
    {
      setanswer("your answer is worng.");
    }
    setTimeout(() => {
      setanswer('');
    }, 2000);
  }
  return (
    <section className='w-full h-screen bg-[#1a1a1a] text-2xl font-semibold flex text-white justify-center items-center '>
      <div id='box' className='bg-[#afafaf] gap-8 flex flex-col p-10 rounded-xl'>
        <h1>which is the world fastes language</h1>
        <div className='flex flex-col gap-1'>
          <div className='gap-3 flex cursor-pointer'>
            <input onChange={(e)=>{setCount(e.target.value)}} type="radio" name="track" id="c++" value="c++"/>
            <label className=' cursor-pointer' for="c++"> c++</label>
          </div>
          <div className='gap-3 flex'>
            <input onChange={(e)=>{setCount(e.target.value)}} type="radio" name="track" id="java" value="java"/>
            <label className=' cursor-pointer' for="java"> java</label>
          </div>
          <div className='gap-3 flex'>
            <input onChange={(e)=>{setCount(e.target.value)}} type="radio" name="track" id="python" value="python"/>
            <label className=' cursor-pointer' for="python"> python</label>
          </div>
          <div className='gap-3 flex'>
            <input onChange={(e)=>{setCount(e.target.value)}} type="radio" name="track" id="javascript" value="javascript"/>
            <label className=' cursor-pointer' for="javascript"> java script</label>
          </div>

        </div>
        <button onClick={run} className='bg-[#202020] h-10 w-40 mx-auto rounded-xl hover:bg-amber-50 hover:text-black' type='submit'>Submit</button>
        <div className='text-center text-lg text-black'>{answer}</div>
      </div>
    </section>
  )
}

export default App
