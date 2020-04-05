/*
 * @Author: your name
 * @Date: 2019-12-15 23:51:29
 * @LastEditTime: 2019-12-15 23:51:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/compose.js
 */
// 执行compose(f, g, h) 相当于 (...args) => f(g(h(...args)))
// 将args按顺序注入到每个函数中，达到一级级传递参数的目的
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
