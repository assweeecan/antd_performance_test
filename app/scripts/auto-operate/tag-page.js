import sleep from '../utils/sleep-promise';

function inputEvent(str, oElement) {
  oElement.value = oElement.value + str;
  // oElement.dispatchEvent(new Event('input', {
  //   bubbles: true,
  //   cancelable: true,
  // }));
  const event = document.createEvent('Event');
  event.initEvent('input', true, true);
  oElement.dispatchEvent(event);
  // const strArr = str.split('');
  // strArr.forEach((e) => {
  //   oElement.value = oElement.value + e;
  //   oElement.dispatchEvent(new window.Event('input', {
  //     bubbles: true,
  //     cancelable: true,
  //     view: window,
  //   }));
  // });
}

let lastRunTime = Date.now();

export default async (e) => {
  const nowTime = Date.now();
  if (lastRunTime + 100 > nowTime) {
    return;
  }
  lastRunTime = nowTime;

  const oElement = e.target;
  const oldText = oElement.innerHTML;
  oElement.innerHTML = '测试中';

  const theInput = window.document.querySelector('#theInput');

  theInput.focus();
  inputEvent('aasd', theInput);

  // window.document.activeElement.blur();

  await sleep(1000);


  oElement.innerHTML = oldText;
}
