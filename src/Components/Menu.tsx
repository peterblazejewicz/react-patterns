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
