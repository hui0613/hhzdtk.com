function tplReplace(tpl,replaceObj) {
  return tpl.replace(/{{(.*?)}}/g,(node,key) => {
    return replaceObj[trimSpace(key)];
  });
}

function trimSpace(str) {
  return str.replace(/\s+/g,"");
}

function getUrlQueryValue(key) {
  const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)","i"),
    res = window.location.search.substr(1).match(reg);
  console.log(res)
  return res != null ? decodeURIComponent(res[2]) : null;
}

// 函数防抖
function debounce(obj,fn,delay) {
  let timer = null;
  return function () {
    let _this = obj;
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(_this,args)
    },delay)

  }
}
//定义函数删除元素的类
function removeClass(obj,className) {
  if (hasClassName(obj,className)) {
    let reg = new RegExp("\\b" + className + "\\b");
    obj.className = obj.className.replace(reg,"");
  }
}

//添加或者删除类名循环切换
function toggleClassName(obj,className) {
  if (!hasClassName(obj,className)) {
    //指定元素不包含指定类名，则添加类名
    addClassName(obj,className);
  } else if (hasClassName(obj,className)) {
    //指定元素一有指定类名，则删除该类名
    removeClass(obj,className);
  }
}

// 定义函数判断指定元素 是否已经包含指定类名，避免重复添加类名
function hasClassName(obj,className) {
  var objClassName = obj.className;
  let reg = new RegExp("\\b" + className + "\\b");
  if (reg.test(objClassName)) {
    return true;
  }
  return false;
}

// 设置函数 通过添加或者删除类名来控制动画
function controlAnimation(obj,showClass,hideClass) {
  if (hasClassName(obj,showClass)) {
    removeClass(obj,showClass);
    obj.className += hideClass;
  } else {
    if (hasClassName(obj,hideClass)) {
      removeClass(obj,hideClass);
      obj.className += showClass;
    } else {
      obj.className += " " + showClass;
    }
  }
}


// 节流函数
function throttle(obj,fn,delay) {
  var timer;
  return function () {
    var _this = obj;
    var args = arguments;
    if (timer) {
      return;
    }
    timer = setTimeout(function () {
      fn.apply(_this,args);
      timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
    },delay)
  }
}

module.exports = {
  tplReplace,
  removeClass,
  getUrlQueryValue,
  toggleClassName,
  hasClassName,
  debounce,
  controlAnimation,
  throttle
};
