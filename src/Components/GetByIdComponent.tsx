import { useState } from 'react'
import { User } from '../types/User';
import UserComponent from './UserComponent';
import { Button, Divider, TextField } from '@mui/material';
import toast from 'react-hot-toast';

export default function () {
  const [user, setUser] = useState<User>();
  const [id, setId] = useState<string>();


  const fetchUsers = async () => {
    let localToken: string = localStorage.getItem('token') || '';

    const requestOptions = {
      method: 'GET',
      headers: { 
      'Content-Type': 'application/json' ,
      'token': localToken
      },
    };
    try{
      await fetch(`http://localhost:8080/demo/user/${id}`, requestOptions)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        if (data != null) {
          toast.success('User found!');
        } else {
          toast.error("User not found.");
        }
      })
    } catch (error){
      console.log(error);
      toast.error("Something went wrong.")
    }
  }

  return (
    <>
      <div className='p-4'>GetByIdComponent</div>
      <div className='flex flex-row gap-8 '>
        <form>
          <TextField id="filled-basic" label="id" variant="outlined" onChange={(e) => setId(e.target.value)} />
        </form>
        <Button variant="contained" onClick={fetchUsers}>Get</Button>

      </div>
      {user?.id && (
        <UserComponent user={user} key={user.email} />
      )}
      <Divider className='pt-8'></Divider>
    </>
  )
}
