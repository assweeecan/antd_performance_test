import React from 'react';
import {Input, Button} from 'antd';
import classNames from 'classnames';
const InputGroup = Input.Group;
class SearchInput extends React.Component {
  static defaultProps = {
    style: {},
    onChange: e=>false,
    onSearch: e=>false,
  }

  state = {
    value: '',
    focus: false,
  }

  handleInputChange = (e)=> {
    let value = e.target.value;
    this.setState({value});
    this.props.onChange(value);
  }


  handleFocusBlur = (e)=> {
    this.setState({
      focus: e.target === document.activeElement,
    });
  }

  handleSearch = ()=> {
    this.props.onSearch(this.state.value);
  }

  render() {
    const {style, size, placeholder} = this.props;
    let {value} = {...this.state, ...this.props};

    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
      <div className="ant-search-input-wrapper" style={style}>
        <InputGroup className={searchCls}>
          <Input placeholder={placeholder} size="large" value={value} onChange={this.handleInputChange}
                 onFocus={this.handleFocusBlur} onBlur={this.handleFocusBlur} onPressEnter={this.handleSearch}
          />
          <div className="ant-input-group-wrap">
            <Button icon="search" size="large" className={btnCls} size={size} onClick={this.handleSearch}/>
          </div>
        </InputGroup>
      </div>
    );
  }
}

export default SearchInput;
