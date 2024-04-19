import React, { useState } from 'react'
import { User } from '../../types/User'
import { Button, Input, TextField } from '@mui/material';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import MESSAGES from '../../util/messages';
import { setAccessToken } from '../../util/token';


export default function RegisterComponent() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();


  const sendRegister = async (e: any) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      email: email,
      password: password,
    };
    await fetch("http://localhost:8080/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then(res => res.json())
      .then((data: any) => {
        setAccessToken(data.token);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error(MESSAGES.REGISTER_FAILED);
      })
  }

  return (
    <div className='pt-16'>
      <div className='flex flex-col items-center text-3xl'>
        <h1 className='p-4'>Register</h1>
        <form className='flex flex-col gap-6 w-[320px]' onSubmit={(e) => sendRegister(e)}>
          <TextField
            required
            type='text'
            label="Username"
            variant="outlined"
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <TextField
            required
            type='email'
            label="Email"
            variant="outlined"
            onChange={(e: any) => setEmail(e.target.value)} />
          <TextField
            required
            type='password'
            label="Password"
            variant="outlined"
            onChange={(e: any) => setPassword(e.target.value)} />
          <Button type='submit' variant="contained">Register</Button>
        </form>
      </div>
    </div>
  )
}
