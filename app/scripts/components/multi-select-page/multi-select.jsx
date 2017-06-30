import React from 'react';
import { Input, Popover, Checkbox } from 'antd';

const calCheckedKeysIndex = (checkedKeys) => {
  const checkedKeysIndex = {};
  checkedKeys.forEach((e) => {
    checkedKeysIndex[e] = e;
  });
  return checkedKeysIndex;
};

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedKeysIndex: calCheckedKeysIndex(props.checkedKeys),
    };
    this.catchState = {
      checkedKeys: props.checkedKeys,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checkedKeys !== nextProps.checkedKeys
      && this.catchState.checkedKeys !== nextProps.checkedKeys) {
      this.setState({
        checkedKeysIndex: calCheckedKeysIndex(nextProps.checkedKeys),
      });
      this.catchState.checkedKeys = nextProps.checkedKeys;
    }
  }

  handleOnCheckboxChange = (event, value) => {
    const element = event.target;
    const { checkedKeysIndex } = this.state;
    let newCheckedKeysIndex = {};
    if (element.checked) {
      newCheckedKeysIndex = {
        ...checkedKeysIndex,
        [value]: value,
      };
    } else {
      newCheckedKeysIndex = { ...checkedKeysIndex };
      delete newCheckedKeysIndex[value];
    }
    const newCheckedKeys = Object.keys(newCheckedKeysIndex);
    this.setState({ checkedKeysIndex: newCheckedKeysIndex });
    this.catchState.checkedKeys = newCheckedKeys;
  }

  render() {
    const { options } = this.props;
    const { checkedKeysIndex } = this.state;
    return (
      <div className="ant-multi-select">
        <Popover
          content={
            <div>
              {
                options.map(item => (
                  <Checkbox
                    key={item.value}
                    checked={!!checkedKeysIndex[item.value]}
                    onChange={e => this.handleOnCheckboxChange(e, item.value)}
                  >
                    {item.label}
                  </Checkbox>
                ))
              }
            </div>
          }
        >
          <Input />
        </Popover>
      </div>
    );
  }
}

MultiSelect.defaultProps = {
  options: [],
  checkedKeys: [],
};

MultiSelect.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.object),
  checkedKeys: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default MultiSelect;
