import React, { Component } from 'react';
import UserList from './UserList';
import { fetchUsers } from '../Utils';
import { UserListContainerProps, UserListContainerState } from '../Model/users';

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
