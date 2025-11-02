import { useState } from 'react'


function App() {
  const [task,settask] = useState('');
  const addtask= (event) => {
   
    event.preventDefault();
     if(task == ''){
      return;
    }

    const list = document.getElementById('list-item');

    let li = document.createElement('li');
    li.innerHTML=`<span>${task}</span>`

    const button = document.createElement('button');
    button.textContent='Delete';
    button.addEventListener('click',function(){
      li.classList.toggle("line-through");
    })
    li.appendChild(button);

    
    list.appendChild(li);
    savetask();
    settask('');
    console.log(list)

    function savetask(){
      localStorage.setItem('list',JSON.stringify('list'));
      const todos = JSON.parse(localStorage.getItem("todos")); // Retrieves as array
console.log(todos);
    }
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo List</h1>
        <form className="flex mb-4">
          <input
            onChange={(e)=>{settask(e.target.value)}}
            value={task}
            type="text"
            className="flex-1 border rounded-l-lg px-4 py-2 outline-none"
            placeholder="Add a todo..."
          />
          <button
            onClick={addtask}
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Add
          </button>
        </form>
        <ul id='list-item' className="space-y-2">
          {/* <li className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded">
            <span>Sample Todo 1</span>
            <button className="text-red-500 hover:text-red-700 font-bold">
              Delete
            </button>
          </li>
          <li className="flex justify-between items-center bg-gray-200 px-4 py-2 rounded">
            <span>Sample Todo 2</span>
            <button className="text-red-500 hover:text-red-700 font-bold">
              Delete
            </button>
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default App;
