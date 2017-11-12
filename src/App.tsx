import React, { MouseEvent } from 'react';
import './App.css';
import { ButtonCounter } from './Components';
import { User } from './Model/users';
import { Menu } from './Components/Menu';
const logo = require('./logo.svg');

class App extends React.Component {
  users: User[] = [
    {
      name: 'Piotr',
      age: 11
    },
    {
      name: 'Kacper',
      age: 2
    }
  ];
  constructor(props: {}) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event: MouseEvent<HTMLButtonElement>) {
    alert('clicked');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <ButtonCounter />
        </p>
        <Menu />
      </div>
    );
  }
}

export default App;
