import React, { SFC } from 'react';
import { ButtonProps } from '../Model';

export const Button: SFC<ButtonProps> = props => (
  <button onClick={props.onClick}>{props.text}</button>
);

export default Button;
