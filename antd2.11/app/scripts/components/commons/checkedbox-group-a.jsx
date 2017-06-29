import React from 'react';
import { shouldUpdate } from 'should-update';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

class CheckboxGroupA extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    if (shouldUpdate(Object.keys(CheckboxGroup.propTypes), this.props, nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <CheckboxGroup {...this.props} />
    );
  }
}

export default CheckboxGroupA;
