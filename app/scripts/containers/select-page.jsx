import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Select, Button,
} from 'antd';

import * as actions from '../actions/select-page';

import autoOperate from '../auto-operate/select-page';

const FormItem = Form.Item;
const Option = Select.Option;


class SelectPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('SelectPage');
  }

  componentDidUpdate() {
    console.timeEnd('SelectPage');
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
          <Button type="primary" onClick={autoOperate}>开始测试</Button>
        </FormItem>

        <FormItem
          className="select-wrap"
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
          className="select2-wrap"
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
          className="select3-wrap"
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

SelectPage.defaultProps = {
  form: {},
  selectDataSource: [],
  select2DataSource: [],
  select3DataSource: [],

  init: () => undefined,
};

SelectPage.propTypes = {
  form: () => undefined,
  selectDataSource: PropTypes.arrayOf(PropTypes.any),
  select2DataSource: PropTypes.arrayOf(PropTypes.any),
  select3DataSource: PropTypes.arrayOf(PropTypes.any),

  init: PropTypes.func,
};

function mapStateToProps(state) {
  return state.selectPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SelectPage));
