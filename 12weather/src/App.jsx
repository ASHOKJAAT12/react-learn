import React from 'react';
import { useState } from 'react'

function App() {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState('');
  const API_key = '2d59f5c1bd3e823dc2cd51f28c0ae051';

  const GetWeather = (e) => {
    e.preventDefault();
    if(city == '')return;
    async function GetData()
    {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        const data = await res.json();
        console.log(data);
        setweather(` ${data.name}: ${data.main.temp} C `);
        setcity('');
        
        
  
      }
      catch (error)
      {
        console.log("error");
      }
    }
    GetData();

  }
  return (
    <section className='bg-[#2a2a2a] w-full h-screen flex justify-center items-center '>
      <div className='bg-[#fff] p-10 rounded-2xl flex flex-col w-[500px] h-[200px] text-center'>
        <h1 className='mb-4 font-semibold text-2xl'>Weather Info</h1>
        <form>
          <input onChange={(e) => { setcity(e.target.value.trim()) }} value={city} placeholder='Enter your City...' className='bg-[#c2c0c0] p-2 pl-4 rounded-l-xl w-80% outline-none' type="text" />
          <button onClick={GetWeather} className='bg-black text-white p-2 rounded-r-2xl w-14'>Get</button>
        </form>
        <div>{weather}</div>
      </div>
    </section>
  )
}

export default App
