
import UpdatePostComponent from './UpdatePostComponent';
import { jwtDecode } from 'jwt-decode';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostBodyComponent(props: any) {
  const token = localStorage.getItem("token") || '';
  let username = "";
  if (token !== "") {
    const decoded: any = jwtDecode(token)
    username = decoded.username;
  }
  const post = props.post
  return (
    <Card sx={{ minWidth: 275, maxWidth:500 }}>
      <CardContent>
        <Typography className='text-right' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {post.createdOn}
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {post.createdBy}
        </Typography>
        <Typography variant="body2">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        {(username == post.createdBy) && (
          <div className='flex justify-end w-full mr-4 mb-2'>
            <UpdatePostComponent post={post} />
          </div>
        )}
      </CardActions>
    </Card>
  )
}
