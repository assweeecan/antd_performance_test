import React from 'react';
import { Input } from 'antd';
import { shouldUpdate } from 'should-update';

class InputNumber extends React.Component {
  static defaultProps = {
    onBlur: e => false,
  }

  state = {
    value: this.props.value,
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;
    let theCheckList = ['value'];
    if (shouldUpdate(theCheckList, prevProps, nextProps)) {
      this.setState({ value: nextProps.value });
    }
  }

  checkNumber = ({ value, min, max, fixed } = {}) => {
    value = parseFloat(value);
    if (isNaN(value)) {
      value = 0;
    }
    if (!isNaN(min)) {
      value = Math.max(min, value);
    }
    if (!isNaN(max)) {
      value = Math.min(max, value);
    }
    if (fixed >= 0) {
      value = (value * 1).toFixed(fixed);
    } else {
      value = "" + (value * 1);
    }
    value = "" + value;
    return value;
  }

  onChange = (event) => {
    let value = event.target.value
    const { onChange } = this.props;
    if (value == "") {
      onChange && onChange(value);
      this.setState({ value });
    } else {
      this.setState({ value });
      if (!isNaN(value)) {
        onChange && onChange(value);
      } else {
      }
    }
  }

  onBlur = (event) => {
    let value = event.target.value;
    const { min, max, onChange, onBlur } = this.props;
    let { fixed } = this.props;
    if (value == "") {
      onBlur("");
    } else {
      value = this.checkNumber({ value, min, max, fixed });
      onBlur(value);
      this.setState({ value })
    }
  }

  render() {
    let theProps = { ...this.props };
    let { value } = this.state;
    delete (theProps['min']);
    delete (theProps['max']);
    delete (theProps['step']);
    delete (theProps['value']);
    delete (theProps['fixed']);
    delete (theProps['onChange']);
    delete (theProps['onBlur']);

    return (
      <Input {...theProps} value={value} onChange={this.onChange} onBlur={this.onBlur} />
    );
  }
}

export default InputNumber;
