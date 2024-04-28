import { useState } from 'react'
import { User } from '../../types/User';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import toast from 'react-hot-toast';

export default function () {
  const [userList, setUserList] = useState<Array<User>>();


  const fetchUsers = async () => {
    const localToken = localStorage.getItem("token") || '';

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localToken
      },
    };
    try {
      await fetch('http://localhost:8080/demo/all', requestOptions)
        .then(res => res.json())
        .then(data => {
          setUserList(data)
        });
      toast.success("User fetch success!")
    } catch (error) {
      console.log(error);
      toast.error("Couldn't get user list.")
    }
  }

  return (
    <>
      <div className='p-4 flex flex-row justify-between'>
        <div />
        <div>
          GetComponent
        </div>
        <Button className="w-min" aria-label="delete" size="small" onClick={fetchUsers}>
          Refresh
        </Button >
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
