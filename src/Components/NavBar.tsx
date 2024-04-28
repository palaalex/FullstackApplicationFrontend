import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import LoginButton from './LoginButton';
import NavBarMenu from './NavBarMenu';

export default function NavBar({ children, userData, setUserData }: any) {

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
        {userData.isLogged && (
            <ul className='flex items-center pr-3'>
              <li className='pr-1'>Welcome,</li>
              <li className='pr-4'>{userData.username}</li>
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
                <LoginButton setUserData={setUserData} />
              ) : (
                <ul className='flex gap-4'>
                  <li>
                    <Link to={'/login'}>
                      <Button variant="contained">Login</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/register'}>
                      <Button variant="contained">Register</Button>
                    </Link>
                  </li>
                </ul>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </nav>
      {children}
    </>
  );
}



