import './App.css'
import PostComponent from './Components/PostComponent'
import GetComponent from './Components/GetComponent'
import GetByIdComponent from './Components/GetByIdComponent'
import DeleteByIdComponent from './Components/DeleteByIdComponent'
import { Toaster } from 'react-hot-toast'
import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import UserPageComponent from './Components/UserPageComponent'
import LoginComponent from './Components/LoginComponent'
import { Button } from '@mui/material'
import RegisterComponent from './Components/RegisterComponent'

function App() {

  return (
    <>
      <nav className='flex flex-row w-screen justify-between absolute top-0 left-0 p-4'>
        <ul className='flex flex-col justify-between gap-4 w-auto text-left'>
          <li><Link className='' to='/'>Get all</Link></li>
          <li><Link to='/get'>Get by id</Link></li>
          <li><Link to='/delete'>Delete user</Link></li>
        </ul>
        <ul className='flex flex-col w-min gap-4 text-center p-4'>
        <Link to={'/login'}>
          
          <Button variant="contained">Login</Button>
          </Link>
          <Link to='/register'>
          <Button variant="contained">Register</Button>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<GetComponent />} />
        <Route path='/get' element={<GetByIdComponent />} />
        <Route path='/delete' element={<DeleteByIdComponent />} />
        <Route path='/user/:id' element={<UserPageComponent />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App