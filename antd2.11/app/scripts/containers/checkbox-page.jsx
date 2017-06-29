import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button, Checkbox, Col, Form, Icon, Row,
} from 'antd';

import * as actions from '../actions/checkbox-page';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;


class CheckboxPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('CheckboxPage');
  }

  componentDidUpdate() {
    console.timeEnd('CheckboxPage');
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


  render() {
    const {
      checkboxDataSource,
      checkbox2DataSource,
    } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={12}>
            <FormItem
              label="下拉多选框"
            >
              <Checkbox onChange={this.handleSelectAllChange}>全选</Checkbox>
              {getFieldDecorator('select', {})(
                <CheckboxGroup options={checkboxDataSource} />
              )}
            </FormItem>
          </Col>
          <Col xs={12} className="no-anime">
            <FormItem
              label="下拉多选框"
            >
              <Checkbox onChange={this.handleSelectAll2Change}>全选</Checkbox>
              {getFieldDecorator('select2', {})(
                <CheckboxGroup options={checkbox2DataSource} />
              )}
            </FormItem>
          </Col>
          <FormItem>
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Row>
      </Form>
    );
  }
}

CheckboxPage.defaultProps = {};

CheckboxPage.propTypes = {};

function mapStateToProps(state) {
  return state.checkboxPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CheckboxPage));
