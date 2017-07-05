import sleep from '../utils/sleep-promise';

function oClick(object) {
  object.dispatchEvent(new window.MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
    view: document.defaultView,
    screenX: object.screenX,
    screenY: object.screenY,
  }));
}

let lastRunTime = Date.now();

export default async (e) => {
  const nowTime = Date.now();
  if (lastRunTime + 100 > nowTime) {
    return;
  }
  lastRunTime = nowTime;

  const selectList = window.document.querySelectorAll('.ant-select-lg.ant-select.ant-select-enabled');


  selectList[0].click();
  await sleep(1000);

  await sleep(1000);
  const dropDownItemList = window.document.querySelectorAll('.ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-dropdown-menu-item');

  dropDownItemList[1].click();
  await sleep(10);
  dropDownItemList[23].click();
  await sleep(10);
  dropDownItemList[100].click();
  await sleep(10);
  dropDownItemList[101].click();
  await sleep(10);
  dropDownItemList[123].click();
  await sleep(500);

  window.document.activeElement.blur();

  await sleep(1000);


}
