/*
 * @Author: your name
 * @Date: 2019-12-01 12:51:37
 * @LastEditTime : 2020-04-01 20:54:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/curry.js
 */
//ES5
// function curry(fn, arr = []) {
//   return fn.length === arr.length
//     ? fn.apply(null, arr)
//     : function(...args) {
//         return curry(fn, arr.concat(args));
//       };
// }

//ES6
export const curry = (fn, arr = []) =>
  fn.length === arr.length
    ? fn(...arr)
    : (...args) => curry(fn, [...arr, ...args]);

var currying = function(fn){
  var args = [];
  return function () {
    if(arguments.length === 0){
      return fn.apply(this, args);
    }else{
      [].push.apply(args, arguments);
      return arguments.callee;
    }
  }
}

var cost = (function(){
  var Income = 0;
  return function(){
    for(var i = 0; i < arguments.length; i++){
      Income += arguments[i];
    }
    return Income;
  }
})();

cost = currying(cost);
cost(100);
cost(150);
cost(-100);
cost(130);
console.log('cost()=' + cost());


// ES56写法
// var curry = function (fn, arr=[]) {
//   return fn.length === arr.length
//     ? fn.apply(null, arr);
//     : function(...args){
//       return curry(fn, arr.concat(args))
//     }
// }