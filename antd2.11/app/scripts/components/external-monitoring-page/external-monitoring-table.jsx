import React from 'react';


import { Table } from 'antd';

import './external-monitoring-table.less';

import { columnsDefault } from './external-monitoring-table-default-columns';

function columnsMaker() {
  return columnsDefault;
}

class PartnerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: columnsMaker.call(this),
    };
  }

  handleIndexModalShowClick = () => {
    const { onMeasureModalVisibleClick } = this.props;
    onMeasureModalVisibleClick();
  }

  handelChartModalVisibleClick = (fromType, channelType, partner, channelName) => {
    const { onChartModalVisibleClick } = this.props;
    onChartModalVisibleClick(fromType, channelType, partner, channelName);
  }

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    const newPagination = {
      ...pagination,
      pageSize: 10,
    };
    onChange(newPagination, sorter);
  }

  handlePaginationChange = (current) => {
    const { tablePagination, tableSorter } = this.props;
    const newPagination = { ...tablePagination, current };
    this.handleTableChange(newPagination, {}, tableSorter);
  }

  render() {
    const {
      tableLoading,
      tableDataSource,
      tablePagination,
    } = this.props;
    const {
      columns,
    } = this.state;

    const theScroll = { x: columns.map(e => e.width).reduce((p, n) => (p + n), 0) };
    return (
      <div className="channel-table">
        <Table
          columns={columns}
          dataSource={tableDataSource}
          pagination={tablePagination}
          loading={tableLoading}
          onChange={this.handleTableChange}
          scroll={theScroll}
          size="middle"
        />
      </div>
    );
  }
}

PartnerTable.defaultProps = {
  onChange: () => false,
  tableLoading: false,
  tablePagination: {
    pageSize: 10,
    total: 0,
    current: 1,
  },
  tableDataSource: [],
  tableSorter: {},
  onMeasureModalVisibleClick: () => false,
  onChartModalVisibleClick: () => false,
};

PartnerTable.propTypes = {
  tableLoading: React.PropTypes.bool,
  tablePagination: React.PropTypes.shape({
    pageSize: React.PropTypes.number,
    total: React.PropTypes.number,
    current: React.PropTypes.number,
  }),
  tableDataSource: React.PropTypes.arrayOf(React.PropTypes.object),
  tableSorter: React.PropTypes.shape({
    field: React.PropTypes.string,
    order: React.PropTypes.string,
  }),
  onChange: React.PropTypes.func,
  onMeasureModalVisibleClick: React.PropTypes.func,
  onChartModalVisibleClick: React.PropTypes.func,
};

export default PartnerTable;
