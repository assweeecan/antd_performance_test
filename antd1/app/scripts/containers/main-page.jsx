import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Select, InputNumber, DatePicker, Input, TimePicker, Switch, Radio,
  Cascader, Slider, Button, Col, Upload, Icon
} from 'antd';

import SelectA from '../components/commons/select-a';

import * as actions from '../actions/main-page';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class MainPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const {
      selectDataSource,
      select2DataSource,
      select3DataSource,
    } = this.props;
    const { getFieldProps } = this.props.form;
    return (
      <Form horizontal onSubmit={this.handleSubmit}>

        <FormItem
          label="input"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required
        >
          <Input {...getFieldProps('input')} />
        </FormItem>

        <FormItem
          label="Select"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required
        >
          <SelectA
            multiple
            style={{ width: 200 }}
            {...getFieldProps('select')}
          >
            {selectDataSource.map(e => (
              <Option key={e} value={e}>{e}</Option>
            ))}
          </SelectA>
        </FormItem>

        <FormItem
          label="Select 2"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required
        >
          <SelectA
            multiple
            style={{ width: 200 }}
            {...getFieldProps('select2')}
          >
            {select2DataSource.map(e => (
              <Option key={e} value={e}>{e}</Option>
            ))}
          </SelectA>
        </FormItem>

        <FormItem
          label="Select 3"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          required
        >
          <SelectA
            multiple
            style={{ width: 200 }}
            {...getFieldProps('select3')}
          >
            {select3DataSource.map(e => (
              <Option key={e} value={e}>{e}</Option>
            ))}
          </SelectA>
        </FormItem>

        <FormItem wrapperCol={{ span: 16, offset: 8 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

MainPage.defaultProps = {};

MainPage.propTypes = {};

function mapStateToProps(state) {
  return state.mainPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(MainPage));
