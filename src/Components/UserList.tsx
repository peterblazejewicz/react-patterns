import React, { SFC } from 'react';
import { Users } from '../Model/users';

export interface UserListProps {
  users: Users;
}

const UserList: SFC<UserListProps> = props => (
  <ul>
    {props.users.map((u, index) => (
      <li key={index}>
        {u.name} - {u.age} years old
      </li>
    ))}
  </ul>
);

export default UserList;
