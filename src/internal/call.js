/*
 * @Author: coolsummer
 * @Date: 2020-01-05 19:24:38
 * @LastEditTime : 2020-03-31 23:36:38
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /work/utils/apply.js
 */
export default call = Function.prototype.call || function (context) {
    //获取上下文，如果上下文不存在，返回window
    var context = context || window;
    //获取当前函数
    context.fn = this;
    //拿到当前参数，从第二个参数开始截取
    var args = [...arguments].slice(1);
    //执行当前函数
    var result = context.fn(...args);
    //去除当前绑定的函数
    delete context.fn;
    return result;
}