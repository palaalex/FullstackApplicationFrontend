import { Button, Divider, TextField } from '@mui/material';
import { useState } from 'react'
import toast from 'react-hot-toast';

export default function DeleteByIdComponent() {
  const [id, setId] = useState<string>();

  const deleteUser = async (e: any) => {
    e.preventDefault();
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      fetch(`http://localhost:8080/demo/delete/${id}`, requestOptions);
      toast.success("User deleted!");
    } catch (error) {
      toast.error("Something went wrong.");
    }
  }


  return (
    <div>
      <div className='p-4'>DeleteByIdComponent</div>
      <form className='flex flex-row gap-8'>
        <TextField id="filled-basic" label="id" variant="outlined" onChange={(e) => setId(e.target.value)}/>
        <Button variant="contained" type='submit' color="error" onClick={(e) => deleteUser(e)}>Delete</Button>
      </form>
      <Divider className='pt-8'></Divider>
    </div>
  )
}
