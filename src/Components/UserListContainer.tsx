import React, { Component } from 'react';
import UserList from './UserList';
import { fetchUsers } from '../Utils';
import { Users } from '../Model/users';

export interface UserListContainerProps {
  users?: Users;
}

export interface UserListContainerState {
  users: Users;
}

class UserListContainer extends Component<
  UserListContainerProps,
  UserListContainerState
> {
  static defaultProps: UserListContainerProps = {
    users: []
  };

  constructor(props: UserListContainerProps) {
    super(props);
    this.state = {
      users: this.props.users!
    };
  }

  componentDidMount() {
    fetchUsers(users => this.setState({ users }));
  }

  render() {
    return <UserList users={this.state.users} />;
  }
}

export default UserListContainer;
