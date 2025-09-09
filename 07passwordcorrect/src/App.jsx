import { useState } from 'react'

function App() {
  
  const [id,setid] = useState('')
  const [pass,setpass] = useState('')
  const [user,setuser] = useState('')
  const [key,setkey] = useState('')

  const usergenerator = () =>{
    let char = "asdfghjklzxcvbnmqwertyuiop"
    let newuser='';
    for(let i=0;i<6;i++){
      const random = Math.floor(Math.random() * char.length);
      newuser += char[random]
    }
    setuser(newuser)

    let newkey = '';
    for(let j =0 ; j < 5;j++){
      newkey += Math.floor(Math.random() * 10).toString();
    }
    setkey(newkey)
  }
  


  const run = () => {
    console.log(id);
    console.log(pass);
    console.log(user);
    console.log(key);
    
    if(id.trim() == user && pass.trim() == key){
      alert("login suessful");
    }
    else{
      alert("worng password");
    }
    setid('');
    setpass('');
    setuser('');
    setkey('');

  }
 
  return (
    <section className='w-full h-screen bg-[#1a1a1a] text-white flex justify-center items-center '>
      <div className='bg-[#3a3a3a] items-center p-20 rounded-3xl gap-4 flex flex-col'>
        <div> user username : {user} password : {key}</div>
        <button onClick={usergenerator} className=' bg-[#8f8f8f] h-10 w-25 rounded-2xl mt-4' type='submit'>generator</button>

        <label className='bg-[#8f8f8f] p-2 rounded-4xl pl-4 outline-none'>
          <input value={id} onChange={(e)=>{setid(e.target.value)}} className='outline-none' type="text" placeholder='Username' />
        </label>
        <label className='bg-[#8f8f8f] p-2 rounded-4xl pl-4 outline-none '>
          <input value={pass} onChange={(e)=>{setpass(e.target.value)}} className='outline-none' type="password" placeholder='Password' />
        </label>
        <button onClick={run} className='bg-[#8f8f8f] h-10 w-20 rounded-2xl mt-4' type='submit'>login</button>
        <div className='bg-[#8f8f8f] p-4 rounded-3xl'>username: {id} password: {pass}</div>
      </div>
    </section>
  )
}

export default App
