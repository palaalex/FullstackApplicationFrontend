import React from 'react'
import { User } from '../types/User';

interface Props {
    user: User;
}

const UserComponent: React.FC<Props> = ({ user }) => {
    return (
        <div className='flex gap-2'>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserComponent;
