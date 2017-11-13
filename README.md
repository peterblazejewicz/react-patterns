# React patterns in TypeScript

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The content follows patterns described in this article: https://medium.com/gitconnected/react-component-patterns-ab1f09be2c82

## Patterns

- stateless component

```ts
import React, { SFC } from 'react';
import { ButtonProps } from '../Model';

export const Button: SFC<ButtonProps> = props => (
  <button onClick={props.onClick}>{props.text}</button>
);

export default Button;
```

- statefull component

```tsx
import React, { Component, MouseEvent } from 'react';
import { Button } from './Button';
import { ButtonCounterProps, ButtonCounterState } from '../Model';

class ButtonCounter extends Component<ButtonCounterProps, ButtonCounterState> {
  static defaultProps: ButtonCounterProps = {
    clicks: 0
  };
  constructor(props: ButtonCounterProps) {
    super(props);
    this.state = {
      clicks: this.props.clicks!
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event: MouseEvent<HTMLButtonElement>): void {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }
  render() {
    return (
      <Button
        onClick={this.handleClick}
        text={`You've clicked me ${this.state.clicks} times!`}
      />
    );
  }
}
export default ButtonCounter;
```

- representational component

```tsx
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
```

- container coponent

```tsx
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
```

- HOC - higher order component

```tsx
import React, { Component } from 'react';
import { ToggleableMenu } from './ToggleableMenu';

/**
 * @export
 * @class Menu
 * @extends {Component}
 */
export class Menu extends Component {
  render() {
    return (
      <div>
        <ToggleableMenu title="First menu">
          <p>Some Content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Second menu">
          <p>Some Content</p>
        </ToggleableMenu>
        <ToggleableMenu title="Third menu">
          <p>Some Content</p>
        </ToggleableMenu>
      </div>
    );
  }
}
```

```tsx
import React, { Component } from 'react';
import { makeToggleable } from '../Utils/decorators';
import { ToggleableMenuProps } from '../Model';

/**
 * @class ToggleableMenu
 * @extends {Component<ToggleableMenuProps, {}>}
 */
@makeToggleable
class ToggleableMenu extends Component<ToggleableMenuProps, {}> {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export { ToggleableMenu };
```

## Author

@peterblazejewicz