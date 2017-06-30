import React from 'react';
import immutable from 'immutable';
import _ from 'underscore';
import classnames from 'classnames';

import './IndexSelector.less';

import {
  message, Button, Checkbox, Col, DatePicker, Form, Icon, Input, Modal, Row, Tabs, Tag
} from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class IndexSelector extends React.Component {
  static defaultProps = {
    onIndexDayChange: e=>false,
    onIndexDayRangeTypeChange: e=>false,
    onModalOk: e=>false,
    onModalCancel: e=>false,
  }

  state = {
    visible: false,
  }


  handleModalOk = ()=> {
    let {onModalOk} = this.props;
    this.setState({visible: false});
    onModalOk();
  }

  handleModalCancel = ()=> {
    let {onModalCancel} = this.props;
    this.setState({visible: false});
    onModalCancel();
  }

  render() {
    let {
      visible,
    } = this.state;


    return (
      <div className="index-selector">

        <Modal
          className="index-selector-modal"
          title=""
          closable={false}
          visible={visible}
          width="width: auto !important"
          style={{top: 0, margin: 0}}
          onOk={this.handleModalOk}
          onCancel={this.handleModalCancel}
          footer={[
                <Button key="back" type="ghost" size="large" onClick={this.handleModalCancel}>取 消</Button>
                ,<Button key="submit" type="primary" size="large" loading={this.state.loading}
                        onClick={this.handleModalOk}>
                  确 定
                </Button>]
          }
        >
          这是一个样例
        </Modal>
      </div>
    )
  }
}

export default IndexSelector;
