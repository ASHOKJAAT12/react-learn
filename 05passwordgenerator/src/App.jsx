import { useState, useEffect, useRef } from 'react'

function App() {
  const [Password,setpassword] = useState('');
  const [number,setnumber] = useState(false);
  const [symbol,setsymbol] = useState(false);
  const [len,setlen] = useState(6);
  // const [goal,setgoal] = useState(false);
  const passwordgenerator = () => {
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if(number){
        char += '0123456789';
      }
      if(symbol){
        char += '!@#$%^&*()_+{}:"<>?|[];\',./`~';
      }
      let password = '';
      for(let i =0; i<len;i++){
        const random = Math.floor(Math.random() * char.length);
        password += char[random];
      }
      setpassword(password);
      useEffect(() => {
      passwordgenerator();
      }, [len, number, symbol]);
  }
  

  const copypassword = () => {
    window.navigator.clipboard.writeText(Password);
    copyButtonRef.current.innerText = 'copied';
    setTimeout(() => {
      copyButtonRef.current.innerText = 'copy';
    }, 1000);
  }
  const copyButtonRef = useRef(null);
  return (
    <section className='bg-[#1a1a1a] flex items-center justify-center w-full h-screen'>
      <div className='bg-[#a3a3a3] w-[400px] h-[300px] gap-6 rounded-lg p-4 flex justify-center items-center flex-col'>
        <div className='bg-white h-10 hover:shadow-2xl shadow-[#1a1a1a] rounded-4xl flex items-center'>
          <input value={Password} className='outline-none pl-4' type="text" name=""  placeholder='Password' id="" />
          <button ref={copyButtonRef} onClick={copypassword} className='bg-[#1a1a1a] h-10 px-4 hover:bg-[#3a3a3a] hover:text-black  rounded-r-4xl text-white '>Copy</button>
        </div>
        <div className='flex justify-around w-full'>
          <label className='flex gap-1 '>
          <input onChange={e => setlen(e.target.value)} className=" cursor-pointer" type="range" name="" min={6} max={16}  />
            lenght: {len}
          </label>
          <label className='flex gap-1 ' >
            <input onChange={e => setnumber(e.target.checked)} type="checkbox" id="" />
            Number
          </label>
          <label className='flex gap-1 ' >
            <input onChange={e => setsymbol(e.target.checked)} type="checkbox" name="" id="" />
            symbol
          </label>
        </div>
        <div><button onClick={passwordgenerator} className='bg-[#1a1a1a] h-10 px-4 hover:bg-[#3a3a3a]  rounded-4xl  font-mono hover:shadow-2xl shadow-black text-white '>Generate</button></div>
      </div>
    </section>
  )
}

export default App
