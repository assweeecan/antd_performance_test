window.scrollBarWidth = null;
function getScrollBarWidth() {
  if (window.scrollBarWidth != null) {
    return window.scrollBarWidth;
  }

  let scrollBarWidth = window.scrollBarWidth;
  var scrollBarHelper = document.createElement("div");
  // if MSIE
  // 如此设置的话，scroll bar的最大宽度不能大于100px（通常不会）。
  scrollBarHelper.style.cssText = "overflow:scroll;width:1000px;height:1000px;position:fixed;top:-500%;left:-500%;";
  // else OTHER Browsers:
  // scrollBarHelper.style.cssText = "overflow:scroll;";
  document.body.appendChild(scrollBarHelper);
  if (scrollBarHelper) {
    scrollBarWidth = {
      horizontal: scrollBarHelper.offsetHeight - scrollBarHelper.clientHeight,
      vertical: scrollBarHelper.offsetWidth - scrollBarHelper.clientWidth
    };
  }
  document.body.removeChild(scrollBarHelper);

  window.scrollBarWidth = scrollBarWidth;
  return scrollBarWidth;
}

export default getScrollBarWidth();



