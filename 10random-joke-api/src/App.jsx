import { useState } from 'react'

function App() {
  const [joke, setjoke] = useState('');
  const createjoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single").then((res)=>res.json()).then((date)=>setjoke(date.joke));
  }
  return (
    <section className='bg-[#278f12] w-full h-screen flex justify-center items-center'>

      <div className='bg-[#dadbd1] w-150 p-20 rounded-2xl items-center flex justify-center  flex-col gap-4'>

          <h1 className='font-semibold '>Joke Generator Using React and Joke API</h1>
          <button onClick={createjoke} className='bg-[#3f3e3e] w-100 h-8 rounded-xl text-white' type='submit'>Click to generate a joke</button>
          <div className='font-semibold text-center'>{joke}</div>
      </div>

    </section>
  )
}

export default App
