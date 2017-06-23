import React from 'react';
import moment from 'moment';
import immutable from 'immutable';
import { shouldUpdate } from 'should-update';
import {
  Button, Col, DatePicker, Form, Row,
} from 'antd';

import './filter-form.less';

const FormItem = Form.Item;

class FilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      daysEndValue: moment().add(1, 'day').startOf('day'),

      indexDay: this.props.indexDay,
    };
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;
    const theCheckList = ['indexDay'];
    if (shouldUpdate(theCheckList, prevProps, nextProps)) {
      this.setState({
        indexDay: nextProps.indexDay,
      });
    }
  }

  handleAdvanceSearchVisibleChange = (value) => {
    this.setState({ advanceSearchVisible: value });
  }

  handleDisabledDayPicker = value => (
    value.valueOf() >= this.state.daysEndValue.valueOf()
  )

  handleIndexDayChange = (value) => {
    this.setState({ indexDay: value });
  }

  handleChannelNameChange = (value) => {
    const { channelNameList } = this.props;
    const { channelName } = this.state;
    let newValue = immutable.Set(value);
    if (channelName.size !== channelNameList.length && newValue.has('全选')) {
      newValue = immutable.Set(channelNameList);
    } else if (channelName.size === channelNameList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = newValue.delete('全选');
    }
    this.setState({ channelName: newValue });
  }

  handlePartnerChange = (value) => {
    const { partnerList } = this.props;
    const { partner } = this.state;
    let newValue = immutable.Set(value);
    if (partner.size !== partnerList.length && newValue.has('全选')) {
      newValue = immutable.Set(partnerList);
    } else if (partner.size === partnerList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = newValue.delete('全选');
    }
    this.setState({ partner: newValue });
  }

  handleAppVersionChange = (value) => {
    const { appVersionList } = this.props;
    const { appVersion } = this.state;
    let newValue = immutable.Set(value);
    if (appVersion.size !== appVersionList.length && newValue.has('全选')) {
      newValue = immutable.Set(appVersionList);
    } else if (appVersion.size === appVersionList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = newValue.delete('全选');
    }
    this.setState({ appVersion: newValue });
  }

  handleAppChannelChange = (value) => {
    const { appChannelList } = this.props;
    const { appChannel } = this.state;
    let newValue = immutable.Set(value);
    if (appChannel.size !== appChannelList.length && newValue.has('全选')) {
      newValue = immutable.Set(appChannelList);
    } else if (appChannel.size === appChannelList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = newValue.delete('全选');
    }
    this.setState({ appChannel: newValue });
  }

  handlePayTypeChange = (value) => {
    const { payTypeList } = this.props;
    const { payType } = this.state;
    let newValue = immutable.Set(value);
    if (payType.size !== payTypeList.length && newValue.has('全选')) {
      newValue = immutable.Set(payTypeList);
    } else if (payType.size === payTypeList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = value.delete('全选');
    }
    this.setState({ payType: value });
  }

  handleChannelTypeChange = (value) => {
    const { channelTypeList } = this.props;
    const { channelType } = this.state;
    let newValue = immutable.Set(value);
    if (channelType.size !== channelTypeList.length && newValue.has('全选')) {
      newValue = immutable.Set(channelTypeList);
    } else if (channelType.size === channelTypeList.length && !newValue.has('全选')) {
      newValue = immutable.Set();
    } else {
      newValue = newValue.delete('全选');
    }
    this.setState({ channelType: newValue });
  }

  handleOnSearchClick = () => {
    const { onChange, onSearch } = this.props;
    const { indexDay } = this.state;
    onChange({ indexDay });
    onSearch();
  }

  handleOnCleanClick = () => {
    const { onClean, onSearch } = this.props;
    const theForm = {
      channelName: immutable.Set(),
      appChannelNumber: immutable.Set(),
      partner: immutable.Set(),
      appVersion: immutable.Set(),
    };
    this.setState(theForm);
    onClean();
    onSearch();
  }

  render() {
    const { indexDay } = this.state;

    const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
    const formItemBtnLayout = {
      wrapperCol: {
        lg: { offset: 4, span: 20 },
        md: { offset: 5, span: 19 },
        xs: { offset: 6, span: 18 },
      },
    };
    return (
      <div className="ant-advanced-search-form">
        <div className="ant-form ant-form-horizontal filter-form">
          <Row gutter={16}>
            <Col lg={6} md={8} sm={12} xs={24}>
              <FormItem
                {...formItemLayout}
                label="日期范围"
              >
                <DatePicker
                  disabledDate={this.handleDisabledDayPicker}
                  size="default" value={indexDay} onChange={this.handleDayChange}
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Col>

            <Col lg={12} md={8} sm={0} xs={0} style={{ height: 48 }} />

            <Col lg={6} md={8} sm={12} xs={24}>
              <FormItem className="filter-form-btn-group" {...formItemBtnLayout}>
                <Button size="default" type="primary" onClick={this.handleOnSearchClick}>搜索</Button>
                <Button size="default" type="default" onClick={this.handleOnCleanClick}>清空</Button>
                <a tabIndex="0" onClick={() => this.handleAdvanceSearchVisibleChange(true)}>高级搜索</a>
              </FormItem>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

FilterForm.defaultProps = {
  onClean: () => false,
  onChange: () => false,
  onSearch: () => false,

  indexDay: moment().startOf('day'),

  channelNameList: [],
  partnerList: [],
  appVersionList: [],
  appChannelList: [],
  payTypeList: [],
  channelTypeList: [],
};

FilterForm.propTypes = {
  indexDay: React.PropTypes.instanceOf(moment),
  channelNameList: React.PropTypes.arrayOf(React.PropTypes.string),
  partnerList: React.PropTypes.arrayOf(React.PropTypes.string),
  appVersionList: React.PropTypes.arrayOf(React.PropTypes.string),
  appChannelList: React.PropTypes.arrayOf(React.PropTypes.string),
  payTypeList: React.PropTypes.arrayOf(React.PropTypes.string),
  channelTypeList: React.PropTypes.arrayOf(React.PropTypes.string),
  onChange: React.PropTypes.func,
  onSearch: React.PropTypes.func,
  onClean: React.PropTypes.func,
};

export default FilterForm;
