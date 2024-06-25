import React from 'react';
import UserItem from './UserItem';
import { UserType } from '../../types';

interface UserProps {
  users: UserType[];
}

const User: React.FC<UserProps> = ({ users }) => {
  return (
    <div>
      <h3 className="mt-4">Users</h3>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default User;
