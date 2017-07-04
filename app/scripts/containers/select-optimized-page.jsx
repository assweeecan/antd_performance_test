import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Select, InputNumber, DatePicker, TimePicker, Switch, Radio,
  Cascader, Slider, Button, Col, Upload, Icon
} from 'antd';

import * as actions from '../actions/select-page';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class SelectOptimizedPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  formItemStyle = {
    labelCol: {
      md: { span: 6 },
      sm: { span: 8 },
    },
    wrapperCol: {
      md: { span: 6 },
      sm: { span: 14 },
    },
  }

  formItemNoLabelStyle = {
    wrapperCol: {
      md: { span: 6, offset: 6 },
      sm: { span: 14, offset: 8 },
    },
  }

  render() {
    const {
      formItemStyle,
      formItemNoLabelStyle,
    } = this;

    const {
      selectDataSource,
      select2DataSource,
      select3DataSource,
    } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>

        <FormItem
          {...formItemNoLabelStyle}
        >
          <Button type="primary">开始测试</Button>
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          {getFieldDecorator('select', {})(
            <Select
              mode="multiple"
            >
              {selectDataSource.map(e => (
                <Option key={e} value={e}>{e.slice(-8)}</Option>
              ))}
            </Select>,
          )}
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          {getFieldDecorator('select2', {})(
            <Select
              mode="multiple"
            >
              {select2DataSource.map(e => (
                <Option key={e} value={e}>{e.slice(-8)}</Option>
              ))}
            </Select>,
          )}
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          {getFieldDecorator('select3', {})(
            <Select
              mode="multiple"
            >
              {select3DataSource.map(e => (
                <Option key={e} value={e}>{e.slice(-8)}</Option>
              ))}
            </Select>,
          )}
        </FormItem>

        <FormItem
          {...formItemNoLabelStyle}
        >
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

SelectOptimizedPage.defaultProps = {};

SelectOptimizedPage.propTypes = {};

function mapStateToProps(state) {
  return state.selectPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SelectOptimizedPage));
