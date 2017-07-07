import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Button, Input,
} from 'antd';

import * as actions from '../actions/select-page';

import SelectA from '../components/commons/select-a';

import autoOperate from '../auto-operate/select-page';

const FormItem = Form.Item;


class SelectOptimizedPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('SelectOptimizedPage');
  }

  componentDidUpdate() {
    console.timeEnd('SelectOptimizedPage');
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
      <Form layout="horizontal">

        <FormItem
          {...formItemNoLabelStyle}
        >
          <Button type="primary" onClick={autoOperate}>开始测试</Button>
        </FormItem>

        <FormItem
          label="输入框"
          {...formItemStyle}
        >
          {getFieldDecorator('theInput', {})(
            <Input />,
          )}
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          <SelectA
            mode="multiple"
            options={selectDataSource}
          />
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          <SelectA
            mode="multiple"
            options={select2DataSource}
          />
        </FormItem>

        <FormItem
          label="下拉多选框"
          {...formItemStyle}
        >
          <SelectA
            mode="multiple"
            options={select3DataSource}
          />
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

SelectOptimizedPage.defaultProps = {
  form: {},
  selectDataSource: [],
  select2DataSource: [],
  select3DataSource: [],

  init: () => undefined,
};

SelectOptimizedPage.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(SelectOptimizedPage));
