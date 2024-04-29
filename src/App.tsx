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
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { UserData } from './types/UserData'
import Footer from "./Components/Footer"

function App() {
  const [userData, setUserData] = useState<UserData>({ isLogged: false })

  useEffect(() => {
    if (userData.isLogged != true) {
      const token = localStorage.getItem("token") || '';
      if (token !== "") {
        const decoded: any = jwtDecode(token)
        setUserData({ isLogged: true, username: decoded.username, id: decoded.id });
      }
    }
  }, [userData])

  return (
    <>
      <NavBar userData={userData} setUserData={setUserData}>
        <Routes>
          <Route path='/' element={<HomeComponent />} />
          <Route path='/login' element={<LoginComponent setUserData={setUserData}/>} />
          <Route path='/register' element={<RegisterComponent setUserData={setUserData} />} />
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
        <Footer />
      </NavBar>
    </>
  )
}

export default App