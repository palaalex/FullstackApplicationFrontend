import React, { useState } from 'react'
import { Post } from '../../types/Post';
import { Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { UserData } from '../../types/UserData';
import MESSAGES from '../../util/messages';
import { useNavigate } from 'react-router-dom';

export default function CreatePostComponent() {
  const [title, setTitle] = useState<String>();
  const [content, setContent] = useState<String>();
  const navigation = useNavigate();

  const handlePost = async (e: any) => {
    e.preventDefault();
    const localToken = localStorage.getItem("token") || '';
    const decoded: UserData = jwtDecode(localToken)
    let createdBy = decoded.username;

    const reqBody = {
      title: title,
      content: content,
      createdBy: createdBy,
    }
    await fetch("http://localhost:8080/posts/", {
      headers: {
        "Content-Type": "application/json",
        "token": localToken,
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
    .then(res => res.text())
    .then((data: any) =>{
      console.log("response: " + data);
      toast.success(MESSAGES.POST_SUCCESS);
      navigation("/");
      setTitle("");
      setContent("");
    }).catch(err => console.log(err))
  }

  return (
    <div className='pt-16'>
      <h1 className='text-3xl p-6'>CreatePost component</h1>
      <form className='flex flex-col gap-6 w-[320px] items-left' onSubmit={(e) => handlePost(e)}>
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

        <TextField
          required
          multiline
          rows={6}
          type='text'
          label="Content"
          variant="outlined"
          value={content}
          onChange={(e: any) => setContent(e.target.value)} />
        <Button className='w-min' type='submit' variant="contained">Post</Button>
      </form>
    </div>
  )
}
