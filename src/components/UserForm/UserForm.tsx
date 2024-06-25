import React from 'react';
import { UserType } from '../../types';
import { UserFormType } from '../../types';

interface UserFormProps {
  onSubmit: (user: UserType) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [newUser, setNewUser] = React.useState<UserFormType>({
    name: '',
    email: '',
    activity: false,
    role: 'User',
  });

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...newUser,
    });

    setNewUser({
      name: '',
      email: '',
      activity: false,
      role: 'User',
    });
  };

  const changeUser = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({
      ...prev,
      activity: event.target.checked,
    }));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <h3 className="mt-4 mb-3">Add user</h3>
      <div className="form-group mb-3 text-start fs-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          onChange={changeUser}
          value={newUser.name}
        />
      </div>
      <div className="form-group mb-3 text-start fs-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={changeUser}
          value={newUser.email}
        />
      </div>
      <div className="form-group mb-3">
        <div className="form-check text-start row-2 p-0 fs-4">
          <label className="form-check-label" htmlFor="online">
            Online
          </label>
          <div className="d-inline-block">
            <input
              className="form-check-input ms-2"
              type="checkbox"
              name="online"
              id="online"
              onChange={changeChecked}
              checked={newUser.activity}
              aria-label="..."
            />
          </div>
        </div>
      </div>
      <div className="form-group mb-3 text-start">
        <select
          className="form-control form-select fs-4"
          aria-label="Default select example"
          name="role"
          id="role"
          value={newUser.role}
          onChange={changeUser}
        >
          <option value="User">User</option>
          <option value="Editor">Editor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2 fs-4">
        Add user
      </button>
    </form>
  );
};

export default UserForm;
