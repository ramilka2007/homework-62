import UsersForm from '../../components/UserForm/UserForm';
import User from '../../components/User/User';
import { useState } from 'react';
import { UserType } from '../../types';

const Usernames = () => {
  const [users, setUsers] = useState<UserType[]>([
    {
      id: '1',
      name: 'Ramil',
      email: 'ramil@gmail.com',
      activity: false,
      role: 'Admin',
    },
    {
      id: '2',
      name: 'Albina',
      email: 'albina@gmail.com',
      activity: true,
      role: 'Editor',
    },
    {
      id: '3',
      name: 'Valentina',
      email: 'valentina@gmail.com',
      activity: false,
      role: 'User',
    },
  ]);

  const addNewUser = (user: UserType) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row justify-content-between">
          <div className="col-5 bg-body-tertiary rounded">
            <UsersForm onSubmit={addNewUser} />
          </div>
          <div className="col-5 bg-body-tertiary rounded">
            <User users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Usernames;
