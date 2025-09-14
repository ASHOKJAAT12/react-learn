import { useState ,useEffect } from 'react'

function App() {
  const [lamount, setlamount] = useState('');
  const [dpayment, setdpayment] = useState('');
  const [roi, setroi] = useState('');
  const [lterm, setltrem] = useState('');
  const [monthpayment, setmonthpayment] = useState('');
  const [totallpayment, settotallpayment] = useState('');
  const [totaliamount, settotaliamount] = useState('');

  const calculate = () => {
    let p = parseFloat(lamount) - parseFloat(dpayment);
    let r = parseFloat(roi) / (12 * 100);
    let n = parseFloat(lterm) * 12;

    let emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);

    setmonthpayment(`Monthly Payment: ₹${emi.toFixed(2)}`);
    settotallpayment(`Total Loan Payment: ₹${(emi * n).toFixed(2)}`);
    settotaliamount(`Total Interest Amount: ₹${((emi * n) - p).toFixed(2)}`);

    setTimeout(() => {
      setmonthpayment('');
      settotallpayment('');
      settotaliamount('');
    }, 5000);

  }
 

  return (
    <section className='bg-[#1a1a1a]  w-full h-screen flex justify-center items-center'>
      <div className='bg-white p-10 rounded-xl flex flex-col gap-8 w-[600px]'>

        <h1 className='text-center text-2xl mb-2 font-bold'>Mortgage Calculator</h1>

        <div className='flex flex-col'>
          <label className='pl-3 font-semibold'>Loan Amount($):</label>
          <input onChange={(e) => setlamount(parseFloat(e.target.value))} value={lamount} className='bg-[#bebdbd] h-10 rounded-2xl p-4 outline-none' type="number" placeholder='Amount' />
        </div>

        <div className='flex flex-col'>
          <label className='pl-3 font-semibold'>Down Payment($):</label>
          <input onChange={(e) => setdpayment(parseFloat(e.target.value))} value={dpayment} className='bg-[#bebdbd] h-10 rounded-2xl p-4 outline-none' type="number" placeholder='Down Payment' />
        </div>

        <div className='flex flex-col'>
          <label className='pl-3 font-semibold'>Rate if Insterest(%):</label>
          <input onChange={(e) => setroi(parseFloat(e.target.value))} value={roi} className='bg-[#bebdbd] h-10 rounded-2xl p-4 outline-none' type="number" placeholder='Annual Interest Rate' />
        </div>

        <div className='flex flex-col'>
          <label className='pl-3 font-semibold'>Loan Term(years):</label>
          <input onChange={(e) => setltrem(parseFloat(e.target.value))} value={lterm} className='bg-[#bebdbd] h-10 rounded-2xl p-4 outline-none' type="number" placeholder='Loan Term' />
        </div>

        <button onClick={calculate} className='bg-[#352d2d] text-amber-100 h-10 rounded-xl cursor-pointer hover:bg-black hover:text-white' type='submit'>Calculate</button>

        <div className='text-center'>
          <div>{monthpayment}</div>
          <div>{totallpayment}</div>
          <div>{totaliamount}</div>
        </div>
      </div>
    </section>
  )
}

export default App
