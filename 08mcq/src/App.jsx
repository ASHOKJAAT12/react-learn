import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='w-full h-screen bg-[#1a1a1a] text-2xl font-semibold flex text-white justify-center items-center '>
      <div className='bg-[#afafaf] gap-4 flex flex-col p-10 rounded-xl'>
        <h1>which is the world fastes language</h1>
        <div>
          <div className='gap-3 flex'>
            <input type="radio" name="track" id="c++" value="c++"/>
            <label for="c++"> c++</label>
          </div>
          <div className='gap-3 flex'>
            <input type="radio" name="track" id="java" value="java"/>
            <label for="java"> java</label>
          </div>
          <div className='gap-3 flex'>
            <input type="radio" name="track" id="python" value="python"/>
            <label for="python"> python</label>
          </div>
          <div className='gap-3 flex'>
            <input type="radio" name="track" id="javascript" value="javascript"/>
            <label for="javascript"> java script</label>
          </div>

        </div>
        <button className='bg-[#202020] h-10 w-40 mx-auto rounded-xl hover:bg-amber-50 hover:text-black' type='submit'>Submit</button>
      </div>
    </section>
  )
}

export default App
