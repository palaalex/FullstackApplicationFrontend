import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Post } from '../../types/Post';
import PostBodyComponent from './PostBodyComponent';
import { Button } from '@mui/material';
import MESSAGES from '../../util/messages';
import { jwtDecode } from 'jwt-decode';
import { UserData } from '../../types/UserData';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../../util/token';

export default function GetAllPostsComponent() {
  const [postList, setPostList] = useState<Array<Post>>([]);
  const [userData, setUserData] = useState<UserData>({ isLogged: false })
  const token = getAccessToken()


  useEffect(() => {
    if (token !== "") {
      const decoded: any = jwtDecode(token)
      setUserData({ isLogged: true, username: decoded.username, id: decoded.id });
    }
  }, [])

  const handlePosts = async () => {
    if(token == "") return;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
    };
    try {
      const response = await fetch('http://localhost:8080/posts/all', requestOptions);
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
      setPostList(data);
      //toast.success(MESSAGES.GET_SUCCESS)
    } catch (error) {
      console.log(error);
      toast.error(MESSAGES.SERVER_ERROR)
    }
  }

  useEffect(() => {
    if(userData.isLogged){ 
      handlePosts();
    }
  }, [userData])


  return (
    <>
      {userData.isLogged ? (

        <div className='pt-16'>
        <h1 className='text-3xl'>GetAllPostsComponent</h1>
        <div className='grid grid-rows-4 grid-flow-col gap-4 p-6 items-center'>
          {postList.map((post) => (
            <PostBodyComponent key={post.id} post={post} />
          ))}
        </div>
        <Button variant="contained" onClick={handlePosts}>Fetch posts</Button>
      </div>
        ) : ( 
          <div className='pt-16'>This is a protected route, please login to see this page.</div>
        )}
    </>
  )
}
