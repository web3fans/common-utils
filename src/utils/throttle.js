/*
 * @Author: CoolSummer
 * @Date: 2019-11-24 22:28:04
 * @LastEditTime : 2020-04-01 20:51:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/throttle.js
 */
/**
 * @description:
 * @param {function} func
 * @param {number} wait
 * @param {object} options 如果想忽略开始函数的的调用，传入{leading: false}
 *                         如果想忽略结尾函数的的调用，传入{trailing: false}
 *
 * @return: {function}
 */
//underscore中源码
// _.throttle = function (func, wait, options) {
//   var context, args, result;
//   var timeout = null;
//   var previous = 0;
//   if (!options) {
//     options = {};
//   }
//   var later = function () {
//     previous = options.leading === false ? 0 : _.now();

//     timeout = null;
//     result = func.apply(context, args);
//     if (!timeout) {
//       context = args = null;
//     }
//   }

//   return function () {
//     var now = _.now();

//     if (!previous && options.leading === false) {
//       previous = now;
//     }
//     var remaining = wait - (now - previous);
//     context = this;
//     args = arguments;

//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         timeout = null;
//       }
//       previous = now;
//       result = func.apply(context, args);
//       if (!timeout) {
//         context = args = null;
//       }
//     } else if (!timeout && options.trailing !== false) {
//       timeout = setTimeout(later, remaining);
//     }
//     return result;
//   }
// };

export const throttle = (fn, wait, immediate) => {
  let timer = null;
  let callNow = immediate;

  return function(){
    let args = arguments;
    let context = this;
    if(callNowß){
      fn.apply(context, args);
      callNow = false;
    }
    if(!timer){
      timer = setTimeout(function(){
        fn.apply(context, args);
        timer = null;
      }, wait)
    }
  }
}

