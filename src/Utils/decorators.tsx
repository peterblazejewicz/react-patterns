import React, { Component, ComponentClass, StatelessComponent } from 'react';
import { ToggleableMenuProps, ToggleableMenuState } from '../Model';
/**
 *
 * @template P
 * @param {(ComponentClass<P> | StatelessComponent<P>)} Clickable
 * @returns
 */
const makeToggleable = <P extends ToggleableMenuProps>(
  Clickable: ComponentClass<P> | StatelessComponent<P>
) => {
  return class extends Component<P, ToggleableMenuState> {
    /**
     * @property
     * @type {ToggleableMenuState}
     */
    state: ToggleableMenuState = {
      show: false
    };
    constructor(props: P) {
      super(props);
      this.toggle = this.toggle.bind(this);
    }
    /**
     * @private
     */
    toggle() {
      this.setState({
        show: !this.state.show
      });
    }
    /**
     * @private
     */
    render() {
      return (
        <div>
          <Clickable {...this.props} onClick={this.toggle} />
          {this.state.show && this.props.children}
        </div>
      );
    }
  };
};

export { makeToggleable };
