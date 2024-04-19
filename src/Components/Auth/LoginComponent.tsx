import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import MESSAGES from '../../util/messages';
import { getAccessToken, setAccessToken } from "../../util/token"

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const sendLoginRequest = async (e: any) => {
    e.preventDefault();
    const reqBody = {
      username: username,
      password: password,
    };
    await fetch("http://localhost:8080/api/login", {
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
      })
      .catch((err) => {
        console.log(err)
        toast.error(MESSAGES.LOGIN_FAILED);
      })
  }

  return (
    <div className='pt-16'>
      <div className='flex flex-col items-center text-3xl'>
        <h1 className='p-4'>Login</h1>
        <form className='flex flex-col gap-6 w-[320px]' onSubmit={(e) => sendLoginRequest(e)}>
          <TextField
            required
            type='text'
            label="Username"
            variant="outlined"
            onChange={(e: any) => setUsername(e.target.value)}
          />

          <TextField
            required
            type='password'
            label="Password"
            variant="outlined"
            onChange={(e: any) => setPassword(e.target.value)} />
          <Button className='' type='submit' variant="contained">Login</Button>
        </form>
      </div>
    </div>
  )
}


