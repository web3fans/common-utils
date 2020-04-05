/*
 * @Author: your name
 * @Date: 2019-11-24 23:05:11
 * @LastEditTime : 2020-04-01 20:51:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/tirm.js
 */
/**
 * @description:
 * @param {type}
 * @return:
 */
// MDN参考：String.prototype.trim()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

//ie9以下不兼容
export const trim = (str) => {
  // 用正则表达式将前后空格
  // 用空字符串替代。
  return str.replace(/(^\s*)|(\s*$)/g, "");
};
//MDN中的trim
// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//   };
// }