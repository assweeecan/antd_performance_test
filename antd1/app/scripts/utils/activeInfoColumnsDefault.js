import {percent, formatNumber} from  './translateNumber';

let columnsDefault = [{
  title: '活动ID / 文案',
  dataIndex: 'activity_id',
  sorter: true,
  render: (text, record, index)=> {
    return text + "  /  " + record.name;
  },
  width: 260,
}, {
  title: '上线时间',
  dataIndex: 'start_time',
  sorter: true,
  width: 160,
}, {
  title: '完成订单数',
  dataIndex: 'order_num',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '订单流水（优惠前）',
  dataIndex: 'real_total_price',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 160,
  className: "text-right",
}, {
  title: '客单价',
  dataIndex: 'order_price',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '活动商户数',
  dataIndex: 'shop_num',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '商户动销率',
  dataIndex: 'order_shop_num_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return percent(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '活动菜品数',
  dataIndex: 'caipin_num',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '菜品动销率',
  dataIndex: 'order_caipin_num_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return percent(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '菜品活动订单占比',
  dataIndex: 'order_num_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 150,
  className: "text-right",
}, {
  title: '完成单新用户数',
  dataIndex: 'new_uid_num',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 140,
  className: "text-right",
}, {
  title: '百度补贴',
  dataIndex: 'baidu_rate',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '商户补贴',
  dataIndex: 'shop_rate',
  sorter: true,
  render: (text, record, index)=> {
    return formatNumber(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '百度补贴率',
  dataIndex: 'baidu_rate_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return percent(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '老用户补贴率',
  dataIndex: 'old_uid_baidu_rate_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return percent(text);
  },
  width: 120,
  className: "text-right",
}, {
  title: '新用户补贴率',
  dataIndex: 'new_uid_baidu_rate_ratio',
  sorter: true,
  render: (text, record, index)=> {
    return percent(text);
  },
  width: 120,
  className: "text-right",
}];


let columnsDefaultIndex = {};
for (let key in columnsDefault) {
  let value = columnsDefault[key];
  columnsDefaultIndex[value.dataIndex] = value;
}

export default columnsDefault;
export {columnsDefaultIndex};
