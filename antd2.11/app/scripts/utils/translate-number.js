export function percent(number, ext = 8, chart = ' %') {
  if (number == null) return number;
  if (isNaN(number)) return number;
  let percentNum = number;
  percentNum = String((percentNum * 100).toFixed(ext) * 1) + chart;
  return percentNum;
}
export function formatNumber(number, fixedNum) {
  let newNumber = number;
  if (number == null) return number;
  if (isNaN(number)) return number;
  if (fixedNum) newNumber = number.toFixed(fixedNum);
  const numberStr = String(newNumber);
  const numberArr = numberStr.split('.');
  numberArr[0] = numberArr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
  // if (numberArr[1]) {
  //   numberArr[1] = numberArr[1].replace(/(\d{3})(?!$)/g, '$1,');
  // }
  return numberArr.join('.');
}

