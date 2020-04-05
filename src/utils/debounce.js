/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:22:23
 * @LastEditTime : 2020-04-01 00:32:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/debounce.js
 */
/**
 * @description:
 * @param {function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return: {function}
 */
//underscore中源码

_.debounce = function (func, wait, immediate) {
  var timeout, timestamp, result, context, args;

  var later = function () {
    var last = _.now() - timestamp;//_.now()   获取当前时间Date.parse(new Date());

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  return function () {
    context = this;
    args = arguments;
    timestamp = _.now();

    var callNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};


export const debounce = (fn, wait, immediate) => {
  let timer = null;

  return function(){
    let args = arguments;
    let context = this;

    if(immediate && !timer){
      fn.apply(context, args);
    }
    if(timer) clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    },wait)

  }
}

