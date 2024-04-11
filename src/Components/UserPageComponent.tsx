import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../types/User';

export default function UserPageComponent() {
  const [user, setUser] = useState<User>();

  const fetchUser = async () =>{

  }

  useEffect(() => {
    fetchUser();
  }, [])

  const { id } = useParams();
  return (
    <div>UserPageComponent</div>
  )
}
