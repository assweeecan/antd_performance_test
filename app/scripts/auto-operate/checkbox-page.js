import sleep from '../utils/sleep-promise';

let lastRunTime = Date.now();

export default async (e) => {
  const nowTime = Date.now();
  if (lastRunTime + 100 > nowTime) {
    return;
  }
  const oElement = e.target;
  const oldText = oElement.innerHTML;
  oElement.innerHTML = '测试中';

  lastRunTime = nowTime;

  const selectList = window.document.querySelector('.select-all');


  selectList.click();

  await sleep(2000);

  selectList.click();

  await sleep(1000);
  oElement.innerHTML = oldText;
}
