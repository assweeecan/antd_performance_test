import React from 'react';
import { Select } from 'antd';
import { shouldUpdate }from 'should-update';


class SelectA extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props !== nextProps ? true : false);
    console.log(nextProps);
    console.log(Select);
    console.log(Select.defaultProps);
    console.log(Select.propTypes);
    console.log(this);

    if (nextState !== this.state) {
      return true;
    }
    if (shouldUpdate(Object.keys(Select.defaultProps), this.props, nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <Select {...this.props}></Select>
    );
  }
}

export default SelectA;
