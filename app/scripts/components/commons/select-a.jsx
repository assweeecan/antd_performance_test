import React from 'react';
import PropTypes from 'prop-types';
import { shouldUpdate } from 'should-update';
import { Select } from 'antd';
import './tag-group.less';

const Option = Select.Option;

// 转换 options
const calOptions = (options = []) => {
  let newOptions = options;
  if (typeof (options[0]) !== 'object') {
    newOptions = options.map(e => ({
      key: e,
      value: e,
      label: e,
    }));
  } else {
    newOptions = options.map(e => ({
      key: e.key,
      value: e.value || e.key,
      label: e.label || e.value || e.key,
    }));
  }
  return newOptions;
};


class SelectA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: calOptions(props.options),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (shouldUpdate(['options'], this.props, nextProps)) {
      this.setState({
        options: calOptions(nextProps.options),
      });
    }
  }

  // 控制更新以减少消耗
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
    if (shouldUpdate(Object.keys(Select.propTypes), this.props, nextProps)) {
      return true;
    }
    if (shouldUpdate(Object.keys(SelectA.propTypes), this.props, nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    const { options } = this.state;
    const props = { ...this.props };
    delete props.options;

    return (
      <Select {...props}>
        {options.map(e => (
          <Option key={e.key} value={e.value}>{e.label}</Option>
        ))}
      </Select>
    );
  }
}

SelectA.defaultProps = {
  options: [],
};

SelectA.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ])),
};

export default SelectA;
