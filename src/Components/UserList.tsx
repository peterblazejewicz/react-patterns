import React, { SFC } from 'react';
import { UserListProps } from '../Model/users';

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
