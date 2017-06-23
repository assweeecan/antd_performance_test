const columnsDefault = [{
  title: '发起人',
  dataIndex: 'user_name',
  sorter: true,
  className: 'text-left',
  width: 100,
}, {
  title: '姓名',
  dataIndex: 'real_name',
  sorter: true,
  className: 'text-left',
  width: 100,
}, {
  title: '状态',
  dataIndex: 'send_status',
  sorter: true,
  className: 'text-left',
  width: 100,
}, {
  title: '所属城市',
  dataIndex: 'city_name',
  sorter: true,
  className: 'text-left',
  width: 140,
}, {
  title: '主送用户',
  dataIndex: 'cc_mail',
  sorter: true,
  width: 130,
  className: 'text-center',
}, {
  title: '抄送用户',
  dataIndex: 'to_mail',
  sorter: true,
  width: 120,
  className: 'text-center',
}, {
  title: '开始时间',
  dataIndex: 'start_time',
  sorter: true,
  width: 120,
  className: 'text-center',
}, {
  title: '结束时间',
  dataIndex: 'end_time',
  sorter: true,
  width: 120,
  className: 'text-center',
}, {
  title: '耗时',
  dataIndex: 'cost_time',
  sorter: true,
  width: 120,
  className: 'text-center',
}, {
  title: '进度',
  dataIndex: 'process',
  sorter: true,
  width: 120,
  className: 'text-center',
}, {
  title: '报表名称',
  dataIndex: 'meun_name',
  sorter: true,
  width: 130,
  className: 'text-center',
}, {
  title: '报表状态',
  dataIndex: 'menu_status',
  sorter: true,
  width: 110,
  className: 'text-center',
}, {
  title: '重试次数',
  dataIndex: 'retry_times',
  sorter: true,
  width: 110,
  className: 'text-center',
}];

const columnsDefaultIndex = {};
Object.values(columnsDefault).forEach(value =>
  (columnsDefaultIndex[value.dataIndex] = value),
);

export default columnsDefault;
export { columnsDefault, columnsDefaultIndex };
