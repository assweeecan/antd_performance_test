import reactTriggerChange from 'react-trigger-change';

import sleep from '../utils/sleep-promise';

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

  const theInput = window.document.querySelector('#theInput');
  theInput.focus();
  await inputEvent('test', theInput);
  window.document.activeElement.blur();

  await sleep(1000);

  oElement.innerHTML = oldText;
};
