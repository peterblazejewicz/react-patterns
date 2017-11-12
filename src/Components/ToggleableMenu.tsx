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
