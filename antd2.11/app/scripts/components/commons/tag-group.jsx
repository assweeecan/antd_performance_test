import React from 'react';
import PropTypes from 'prop-types';
import { shouldUpdate } from 'should-update';
import { Tag } from 'antd';
import './tag-group.less';

const calOptions = (options = []) => {
  let newOptions = options;
  if (Array.isArray(options) && options.length > 0 && typeof options[0] !== 'object') {
    newOptions = options.map(e => ({ value: e, label: e }));
  }
  return newOptions;
};

const calValueIndex = (value) => {
  const valueIndex = {};
  if (Array.isArray(value)) {
    value.forEach((e) => {
      valueIndex[e] = e;
    });
  }
  return valueIndex;
};

class TagGroupA extends React.Component {
  constructor(props) {
    super(props);
    const options = calOptions(props.options || []);
    const value = props.value || [];
    const valueIndex = calValueIndex(value);
    this.state = {
      options,
      value,
      valueIndex,
    };
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;
    if (shouldUpdate(['options'], prevProps, nextProps)) {
      const theOptions = calOptions(nextProps.options);
      this.setState({ options: theOptions });
      if (!Object.prototype.hasOwnProperty.call(nextProps, 'value')) {
        const value = theOptions.map(e => e.value);
        const valueIndex = calValueIndex(value);
        this.setState({ value, valueIndex });
      }
    }
    if (shouldUpdate(['value'], prevProps, nextProps)) {
      const value = nextProps.value || [];
      const valueIndex = calValueIndex(value);
      this.setState({ value, valueIndex });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }

    if (shouldUpdate(Object.keys(TagGroupA.propTypes), this.props, nextProps)) {
      return true;
    }
    return false;
  }

  render() {
    const { color } = this.props;
    const { options, valueIndex } = this.state;
    return (
      <div className="tag-group">
        {options.filter(e => valueIndex[e.value]).map(e => (
          <Tag color={color} key={e.value}>{e.label}</Tag>
        ))}
      </div>
    );
  }
}

TagGroupA.defaultProps = {
  options: [],
  value: [],
  color: '',
};

TagGroupA.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  value: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  color: PropTypes.string,
};

export default TagGroupA;
