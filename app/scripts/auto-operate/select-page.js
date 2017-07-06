import reactTriggerChange from 'react-trigger-change';
import sleep from '../utils/sleep-promise';

let lastRunTime = Date.now();

async function inputEvent(str, element) {
  const theElement = element;
  const strArr = str.split('');
  for (const e of strArr) {
    theElement.value = theElement.value + e;
    reactTriggerChange(theElement);
    await sleep(50);
  }
}

export default async (e) => {
  const oElement = e.target;
  const oldText = oElement.innerHTML;
  oElement.innerHTML = '测试中';

  const nowTime = Date.now();
  if (lastRunTime + 100 > nowTime) {
    return;
  }
  lastRunTime = nowTime;

  const theInput = window.document.querySelector('#theInput');
  theInput.focus();
  await inputEvent('test', theInput);
  window.document.activeElement.blur();

  await sleep(1000);

  oElement.innerHTML = oldText;
};
