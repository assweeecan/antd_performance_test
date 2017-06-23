export function percent(number, ext = 8, chart = " %") {
  if (!number) return number;
  if (isNaN(number)) return number;
  let percentNum = number;
  percentNum = (percentNum * 100).toFixed(ext) * 1 + chart;
  return percentNum;
}
export function formatNumber(number) {
  if (!number) return number;
  if (isNaN(number)) return number;
  number = "" + number;
  let numberArr = number.split(".");
  numberArr[0] = numberArr[0].replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
  if (numberArr[1]) {
    numberArr[1] = numberArr[1].replace(/(\d{3})(?!$)/g, "$1,")
  }
  return numberArr.join(".");
}

