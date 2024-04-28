import React, { useState } from 'react'
import { MdModeEdit } from 'react-icons/md'
import UpdatePostComponent from './UpdatePostComponent';
import { jwtDecode } from 'jwt-decode';

export default function PostBodyComponent(props: any) {
  const token = localStorage.getItem("token") || '';
  let username = "";
  if (token !== "") {
    const decoded: any = jwtDecode(token)
    username = decoded.username;
  }
  const post = props.post
  return (
    <div className='w-auto text-left border-2 border-black p-2 rounded-lg'>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>{post.title}</h1>
        {(username == post.createdBy) && (
          <>
            <UpdatePostComponent post={post} />
          </>
        )}
      </div>
      <p className='pl-4'>{post.content}</p>
      <div className='flex flex-row justify-between'>
        <p>Created by: {post.createdBy}</p>
        <p>{post.createdOn}</p>
      </div>
    </div>
  )
}
