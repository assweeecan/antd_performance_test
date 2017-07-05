import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Checkbox, Col, Form, Icon, Row,
} from 'antd';

import * as actions from '../actions/checkbox-optimized-page';

import autoOperate from '../auto-operate/checkbox-page';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;


class CheckboxOptimizedPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('CheckboxOptimizedPage');
  }

  componentDidUpdate() {
    console.timeEnd('CheckboxOptimizedPage');
  }

  handleSelectAllChange = (event) => {
    const { setFieldsValue } = this.props.form;
    const { checkboxDataSource } = this.props;
    const { checked } = event.target;
    if (checked) {
      setFieldsValue({ select: checkboxDataSource })
    } else {
      setFieldsValue({ select: [] })
    }
  }

  handleSelectAll2Change = (event) => {
    const { setFieldsValue } = this.props.form;
    const { checkbox2DataSource } = this.props;
    const { checked } = event.target;
    if (checked) {
      setFieldsValue({ select2: checkbox2DataSource })
    } else {
      setFieldsValue({ select2: [] })
    }
  }

  formItemStyle = {
    labelCol: {
      md: { span: 6 },
      sm: { span: 8 },
    },
    wrapperCol: {
      md: { span: 12 },
      sm: { span: 14 },
    },
  }

  formItemNoLabelStyle = {
    wrapperCol: {
      md: { span: 12, offset: 6 },
      sm: { span: 14, offset: 8 },
    },
  }


  render() {
    const {
      formItemStyle,
      formItemNoLabelStyle,
    } = this;

    const {
      checkboxDataSource,
      checkbox2DataSource,
    } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal">
        <div className="no-anime">

          <FormItem
            {...formItemNoLabelStyle}
          >
            <Button type="primary" onClick={autoOperate}>开始测试</Button>
          </FormItem>

          <FormItem
            label="选择框"
            {...formItemStyle}
          >
            <Checkbox className="select-all" onChange={this.handleSelectAllChange}>全选</Checkbox>
            <div style={{ maxHeight: 300, overflowY: 'auto' }}>
              {getFieldDecorator('select', {})(
                <CheckboxGroup options={checkboxDataSource} />
              )}
            </div>
          </FormItem>

          <FormItem
            label="选择框"
            {...formItemStyle}
          >
            <Checkbox onChange={this.handleSelectAll2Change}>全选</Checkbox>
            <div style={{ maxHeight: 300, overflowY: 'auto' }}>
              {getFieldDecorator('select2', {})(
                <CheckboxGroup options={checkbox2DataSource} />
              )}
            </div>
          </FormItem>

          <FormItem
            {...formItemNoLabelStyle}
          >
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>

        </div>
      </Form>
    );
  }
}

CheckboxOptimizedPage.defaultProps = {};

CheckboxOptimizedPage.propTypes = {};

function mapStateToProps(state) {
  return state.checkboxOptimizedPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckboxOptimizedPage));
