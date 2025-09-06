import React, { useState } from "react"
function App() {
  const [color,setcolor] = useState("white");
  const addcolor=(value) => {
    setcolor(value)
  }
  return (
    
    <>
      <div style={{ backgroundColor: color }}  className=" w-full h-screen flex justify-center items-end">
        <div className=" bg-amber-50 shadow-blue-700 hover:shadow-2xl transform-border  border-2 border-blue-600 gap-4   mb-15 p-3 grid grid-cols-4 md:grid-flow-col rounded-3xl">

          <div onClick={() => {addcolor("red")}} className="bg-red-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">Red</div>

          <div onClick={() => {addcolor("green")}} className="bg-green-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">green</div>

          <div onClick={() => {addcolor("blue")}} className="bg-blue-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">blue</div>

          <div onClick={() => {addcolor("purple")}} className="bg-purple-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">purple</div>

          <div onClick={() => {addcolor("gray")}} className="bg-gray-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">gray</div>

          <div onClick={() => {addcolor("yellow")}} className="bg-yellow-600 hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">yellow</div>

          <div onClick={() => {addcolor("white")}} className="bg-[#c9c5c5] hover:bg-black hover:text-white cursor-pointer font-medium
           w-14 p-2 text-center rounded-2xl">white</div>

        </div>

      </div>
    </>
  )
}

export default App
