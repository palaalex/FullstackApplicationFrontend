import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import MESSAGES from '../../util/messages';

export default function UpdatePostComponent(props: any) {
  const post = props.post;
  const [title, setTitle] = useState<String>(post.title);
  const [content, setContent] = useState<String>(post.content);
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigation = useNavigate();
  const localToken = localStorage.getItem("token") || '';

  const handlePost = async () => {
    const reqBody = {
      title: title,
      content: content,
    }
    await fetch(`http://localhost:8080/posts/${post.id}`, {
      headers: {
        "Content-Type": "application/json",
        "token": localToken,
      },
      method: "PUT",
      body: JSON.stringify(reqBody),
    })
      .then(res => res.text())
      .then((data: any) => {
        console.log("PUT response: " + data);
        toast.success("Post updated!");
        navigation("/");
      }).catch(err => console.log(err))
  }

  const handleDelete = async () => {
    try{
      const res = await fetch(`http://localhost:8080/posts/${post.id}`, {
        headers: {
          "Content-Type": "application/json",
          "token": localToken,
        },
        method: "DELETE",
      })
      if(res.ok){
        toast.success(MESSAGES.DELETE_SUCCESS)
        navigation("/")
      } else {
        if(res.status === 404) toast.error(MESSAGES.NOT_FOUND);
        if(res.status === 401) toast.error(MESSAGES.UNAUTHORIZED);
       }
    } catch(error){
      console.log(error);
      toast.error(MESSAGES.SERVER_ERROR)
    }
  }

  return (
    <>
      <React.Fragment>
        <div className='flex gap-4'>
          <button>
            <MdDelete color='maroon' onClick={handleDelete}/>
          </button>
          <button onClick={handleClickOpen}>
            <MdModeEdit />
          </button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handlePost();
              handleClose();
            },
          }}
        >
          <DialogTitle >UpdatePost component</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <div className='p-2 w-[300px]'>

              <TextField
                required
                className='w-5/6'
                type='text'
                label="Title"
                variant="outlined"
                value={title}
                inputProps={{ maxLength: 25 }}
                onChange={(e: any) => setTitle(e.target.value)}
              />
            </div>
            <div className='p-2'>
              <TextField
                required
                multiline
                rows={6}
                type='text'
                label="Content"
                variant="outlined"
                value={content}
                onChange={(e: any) => setContent(e.target.value)} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  )
}
