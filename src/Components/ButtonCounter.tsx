import React, { Component, MouseEvent } from 'react';
import { Button } from './Button';

export interface ButtonCounterState {
  clicks: number;
}

export interface ButtonCounterProps {
  clicks?: number;
}
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
