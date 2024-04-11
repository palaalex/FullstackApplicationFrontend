import React, { useState } from 'react'
import useLocalState from "../util/useLocalState"

export default function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLoginRequest = async () => {
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
        console.log(data.token)
        localStorage.clear();
        localStorage.setItem("token", data.token)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div>
        <label>Username</label>
        <input className='ml-4\ border-2 rounded-lg' type='email' id='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
      </div>
      <div>
        <label>Password</label>
        <input className='ml-4 border-2 rounded-lg' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
      </div>
      <div>
        <button id='submit' type='button' onClick={() => sendLoginRequest()}>
          Login
        </button>
      </div>
    </>
  )
}
