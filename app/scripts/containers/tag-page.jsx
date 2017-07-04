import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Input, Button, Tag,
} from 'antd';

import * as actions from '../actions/tag-page';

const FormItem = Form.Item;


class TagPage extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    init();
  }

  componentWillUpdate() {
    console.time('TagPage');
  }

  componentDidUpdate() {
    console.timeEnd('TagPage');
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
      <Form layout="horizontal" onSubmit={this.handleSubmit}>

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
            {tagDataSource.map(e => (
              <Tag key={e.value}>{e.label}</Tag>
            ))}
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

TagPage.defaultProps = {
  form: {},
  tagDataSource: [],

  init: () => undefined,
};

TagPage.propTypes = {
  form: PropTypes.objectOf(PropTypes.func),
  tagDataSource: PropTypes.arrayOf(PropTypes.any),

  init: PropTypes.func,
};

function mapStateToProps(state) {
  return state.tagPage;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(TagPage));
