import React, { SFC, MouseEvent } from 'react';

export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

export const Button: SFC<ButtonProps> = props => (
  <button onClick={props.onClick}>{props.text}</button>
);

export default Button;
