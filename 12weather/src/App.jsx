// ...existing code...
import React from 'react';
import { useState } from 'react'

function App() {
  const [city, setcity] = useState('');
  const [weather, setweather] = useState('');
  const [error, seterror] = useState('');
  const API_key = '2d59f5c1bd3e823dc2cd51f28c0ae051';

  const GetWeather = async (e) => {
    e.preventDefault();
    if (city.trim() === '') return;

    try {
      // use HTTPS for geocoding
      const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&appid=${API_key}`);
      if (!geoRes.ok) {
        seterror('Failed to fetch coordinates');
        setweather('');
        return;
      }
      const codinateData = await geoRes.json();
      if (!codinateData || codinateData.length === 0) {
        seterror('City not found');
        setweather('');
        return;
      }

      const { lon, lat } = codinateData[0];

      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
      if (!res.ok) {
        seterror('Failed to fetch weather data');
        setweather('');
        return;
      }
      const data = await res.json();

      const tempC = parseFloat((data.main.temp - 273.15).toFixed(2));
      const name = data.name;
      const weatherDescription = data.weather[0].description;

      setweather(`${name} : ${tempC}°C (${weatherDescription})`);
      seterror('');
      setcity('');
    } catch (err) {
      console.error(err);
      seterror('Failed to fetch weather data');
      setweather('');
    }
  }

  return (
    <section className='bg-[#2a2a2a] w-full h-screen flex justify-center items-center '>
      <div className='bg-[#fff] p-10 rounded-2xl flex flex-col w-[500px] h-[200px] text-center'>
        <h1 className='mb-4 font-semibold text-2xl'>Weather Info</h1>
        <form onSubmit={GetWeather}>
          <input onChange={(e) => { setcity(e.target.value) }} value={city} placeholder='Enter your City...' className='bg-[#c2c0c0] p-2 pl-4 rounded-l-xl w-full outline-none' type="text" />
          <button type="submit" className='bg-black text-white p-2 rounded-r-2xl w-14'>Get</button>
        </form>
        <div>{error || weather}</div>
      </div>
    </section>
  )
}

export default App
// ...existing code...