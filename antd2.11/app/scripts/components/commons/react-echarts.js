import React from 'react';
import echarts from 'echarts/index.common';
import { shouldUpdate } from 'should-update';

class EchartOne extends React.Component {
  static defaultProps = {
    notMerge: true,
    lasyUpdate: false,
    style: {},
    onEvents: {},
  }

  state = {}

  myChart = null
  chartData = []
  chartDataIndex = {}

  componentDidMount() {
    let { option, onEvents } = this.props;
    this.rerenderEcharts();
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;
    let propsNameList = ['option', 'notMerge', 'lasyUpdate'];
    if (shouldUpdate(propsNameList, prevProps, nextProps)) {
      this.rerenderEcharts();
    }
  }

  componentWillReceiveProps(nextProps) {
    const prevProps = this.props;
    let propsNameList = ['option', 'notMerge', 'lasyUpdate'];
    if (shouldUpdate(propsNameList, prevProps, nextProps)) {
      this.rerenderEcharts();
    }
  }

  getEchartsInstance = () => {
    return this.myChart;
  }

  rerenderEcharts = () => {
    let { option, notMerge, lasyUpdate, onEvents } = this.props;
    if (!this.myChart) {
      if (option) {
        var myChart = this.myChart = echarts.init(this.refs.echart);
        myChart.setOption(option, notMerge, lasyUpdate);
        for (let key in onEvents) {
          myChart.on(key, onEvents[key]);
        }
      }
    } else {
      this.myChart.setOption(option, notMerge, lasyUpdate);
    }
  }

  render() {
    let { style, onDaysChange, } = this.props;
    return (
      <div style={style} ref="echart"></div>
    )
  }
}

export default EchartOne;
