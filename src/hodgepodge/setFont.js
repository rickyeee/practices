var docElem = document.documentElement,
  metaElem = document.querySelector('meta[name="viewport"]'),
  dpr = window.devicePixelRatio || 1,
  // 将页面分为10块
  blocks = 10,
  // 需要限制的最小宽度
  defaultMinWidth = 320,
  // 需要限制的最大宽度
  defaultMaxWidth = 540,
  // 计算的基准值
  calcMaxWidth = 9999999;

if (metaElem.getAttribute('data-content-max') !== null) {
  calcMaxWidth = defaultMaxWidth;
}

// 设置docElem字体大小
function setFontSize() {

  var clientWidth = docElem.clientWidth;

  clientWidth = Math.max(clientWidth, defaultMinWidth * dpr)

  // 调整计算基准值
  // 设置了['data-content-max']属性
  if (calcMaxWidth === defaultMaxWidth) {
    clientWidth = Math.min(clientWidth, defaultMaxWidth * dpr);
  }

  docElem.style.fontSize = clientWidth / blocks + 'px';
}

setFontSize();

window.addEventListener(window.orientationchange ? 'orientationchange' : 'resize', setFontSize, false);