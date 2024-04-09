import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostComponent from './Components/PostComponent'
import GetComponent from './Components/GetComponent'
import GetByIdComponent from './Components/GetByIdComponent'
import DeleteByIdComponent from './Components/DeleteByIdComponent'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-4'>
      <PostComponent />
      <GetByIdComponent />
      <DeleteByIdComponent />
      <GetComponent />
      <Toaster />
    </div>
  )
}

export default App
