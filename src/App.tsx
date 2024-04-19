import './App.css'
import GetByIdComponent from './Components/CrudComponents/GetByIdComponent'
import DeleteByIdComponent from './Components/CrudComponents/DeleteByIdComponent'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import UserPageComponent from './Components/UserPageComponent'
import LoginComponent from './Components/Auth/LoginComponent'
import RegisterComponent from './Components/Auth/RegisterComponent'
import NavBar from "./Components/NavBar"
import HomeComponent from './Components/HomeComponent'
import CreatePostComponent from './Components/Post/CreatePostComponent'
import GetAllPostsComponent from './Components/Post/GetAllPostsComponent'
import GetPostByIdComponent from './Components/Post/GetPostByIdComponent'
import PrivateRoutes from './util/PrivateRoutes'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/' element={<HomeComponent />} />
        <Route element={<PrivateRoutes />} >
          <Route path='/createPost' element={<CreatePostComponent />} />
          <Route path='/get' element={<GetByIdComponent />} />
          <Route path='/delete' element={<DeleteByIdComponent />} />
          <Route path='/user/:id' element={<UserPageComponent />} />
          <Route path='/posts' element={<GetAllPostsComponent />} />
          <Route path='/updatePost' element={<GetPostByIdComponent />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App