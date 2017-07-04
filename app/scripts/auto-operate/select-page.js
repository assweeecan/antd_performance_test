function imitateClick(theDom) {
  const theEvent = new window.MouseEvent('click', {});
  theDom.dispatchEvent(theEvent);
}

export default async function () {
  const selectList = window.document.querySelectorAll('.ant-select-lg.ant-select.ant-select-enabled');
  console.log(selectList);
  imitateClick(selectList[0]);
  const dropDown = window.document.querySelector('.ant-select-dropdown:not(.ant-select-dropdown-hidden)');
  console.log(dropDown);

}
