import { useState } from 'react'
import { User } from '../../types/User';
import UserComponent from '../UserComponent';
import { Button, Divider, TextField } from '@mui/material';
import toast from 'react-hot-toast';
import { Post } from '../../types/Post';
import PostBodyComponent from './PostBodyComponent';
import MESSAGES from '../../util/messages';

export default function () {
  const [post, setPost] = useState<Post>();
  const [id, setId] = useState<string>();

  const handlePosts = async (e: any) => {
    e.preventDefault();
    const localToken = localStorage.getItem("token") || '';

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localToken
      },
    };
    try {
      const response = await fetch(`http://localhost:8080/posts/${id}`, requestOptions);
      if (!response.ok) {
        if (response.status === 404) {
          toast.error(MESSAGES.NOT_FOUND);
        } else if (response.status === 401) {
          toast.error(MESSAGES.UNAUTHORIZED)
        } else {
          toast.error(MESSAGES.SERVER_ERROR);
        }
        return 
      }
      const data = await response.json();
      setPost(data);
      toast.success(MESSAGES.GET_SUCCESS);
    } catch (error) {
      console.log(error);
      toast.error(MESSAGES.SERVER_ERROR);
    }
  }

  return (
    <div className='pt-16'>
      <div className='p-4'>GetPostByIdComponent</div>
      <div className='flex flex-row gap-8 '>
        <form onSubmit={(e) => handlePosts(e)}>
          <TextField id="filled-basic" label="id" variant="outlined" onChange={(e) => setId(e.target.value)} />
          <Button type='submit' variant="contained">Get</Button>
        </form>
      </div>
      {post?.createdOn && (
        <PostBodyComponent key={post.id} title={post.title} content={post.content} createdOn={post.createdOn} createdBy={post.createdBy} />
      )}
      <Divider className='pt-8'></Divider>
    </div>
  )
}
