import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' bg-slate-200 border-4 w-60 m-auto text-center rounded-lg scroll-p-1.5'>
<div className='w-24 h-24 bg-white m-auto border rounded-full' ></div>
<h1 className='text-3xl mt-2 mb-3' >Headline</h1>
<p className='mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
   </div>
        
  )
}

export default App
