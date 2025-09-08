import { useState } from 'react'

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleTask = () => {
    if (task.trim() === '') return; // ignore empty
    setList([...list, task]); // add new task
    setTask(''); // clear input
  };

  const delTask = (index) => {
    setList(list.filter((_, i) => i !== index)); // remove by index
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-2xl px-4 py-6">
          <h1 className="text-2xl font-semibold">Todo</h1>
          <p className="text-sm text-slate-500">HTML + Tailwind CSS in React</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <section className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Add a task..."
              className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <button
              onClick={handleTask}
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800"
            >
              Add
            </button>
          </form>

          <div className="mt-6 space-y-2">
            {list.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
              >
                <input
                  id={`task-${index}`}
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
                />
                <label htmlFor={`task-${index}`} className="flex-1 text-sm">
                  {item}
                </label>
                <button
                  type="button"
                  onClick={() => delTask(index)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-2xl px-4 pb-8 text-center text-xs text-slate-400">
        Built with Tailwind via CDN (dynamic Todo List 🚀)
      </footer>
    </div>
  );
}

export default App;
