import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Input, Button,
} from 'antd';
import TagGroupA from '../components/commons/tag-group';

import * as actions from '../actions/tag-optimized-page';

const FormItem = Form.Item;

class TagOptimizedPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('TagOptimizedPage');
  }

  componentDidUpdate() {
    console.timeEnd('TagOptimizedPage');
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
      tagDataSource,
    } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal">

        <FormItem
          {...formItemNoLabelStyle}
        >
          <Button type="primary">开始测试</Button>
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
          label="标签"
          {...formItemStyle}
        >
          <div style={{ maxHeight: 300, overflowY: 'auto' }}>
            <TagGroupA options={tagDataSource} />
          </div>
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


TagOptimizedPage.defaultProps = {
  form: {},
  tagDataSource: [],

  init: () => undefined,
};

TagOptimizedPage.propTypes = {
  form: PropTypes.objectOf(PropTypes.func),
  tagDataSource: PropTypes.arrayOf(PropTypes.any),

  init: PropTypes.func,
};

function mapStateToProps(state) {
  return state.tagOptimizedPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(TagOptimizedPage));
