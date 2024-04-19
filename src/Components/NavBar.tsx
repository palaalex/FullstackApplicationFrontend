import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserData } from '../types/UserData';
import toast from 'react-hot-toast';
import { MdMenu } from 'react-icons/md';
import LoginButton from './LoginButton';
import NavBarMenu from './NavBarMenu';
import { getAccessToken } from '../util/token';

export default function NavBar() {
  const [userData, setUserData] = useState<UserData>({ isLogged: false })

  useEffect(() => {
    const token = getAccessToken();
    if (token !== "") {
      const decoded: any = jwtDecode(token)
      setUserData({ isLogged: true, username: decoded.username, id: decoded.id });
    }
  }, [])

  const logout = () => {
    
  }


  return (
    <>
      <nav className='flex flex-row w-screen justify-between fixed top-0 left-0 p-4 bg-slate-200 hidden'>
        <ul className='flex justify-between gap-4 w-auto text-left'>
          <li>
            <Link to={'/'}>
              <Button variant="outlined">Home</Button>
            </Link>
          </li>
          {userData.isLogged && (
            <li>
              <Link to={'/createPost'}>
                <Button variant="outlined">Create post</Button>
              </Link>
            </li>
          )}
        </ul>
        {userData.isLogged
          ? (
            <ul className='flex items-center pr-3'>
              <li className='pr-1'>Welcome,</li>
              <li className='pr-4'>{userData.username}</li>
            </ul>
          ) : (
            <ul className='flex justify-between gap-4 w-auto'>

            </ul>
          )}
      </nav>
      <nav className='top-0 left-0 fixed w-screen'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <NavBarMenu />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to={'/'}>
                  PostApp
                </Link>
              </Typography>
              {userData.isLogged ? (
                <LoginButton setUserData={setUserData}/>
              ) : (
                <ul className='flex gap-4'>
                  <li>
                    <Link to={'/login'}>
                      <Button variant="contained">Login</Button>
                    </Link>
                  </li>
                </ul>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
    </>
  )
}